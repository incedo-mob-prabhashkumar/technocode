import { UI } from "../ui"
import { cmd } from "./cmd"
import { Instance } from "@/project/instance"
import { Process } from "@/util/process"
import { git } from "@/util/git"

export const prCreateCommand = cmd({
  command: "pr-create [title]",
  describe: "Create a GitHub PR from current branch",
  builder: (yargs) =>
    yargs
      .positional("title", {
        type: "string",
        describe: "PR title (defaults to branch name)",
        demandOption: false,
      })
      .option("body", {
        type: "string",
        describe: "PR description body",
        alias: "b",
      })
      .option("base", {
        type: "string",
        describe: "Base branch to merge into (default: main)",
        alias: "B",
        default: "main",
      })
      .option("draft", {
        type: "boolean",
        describe: "Create as draft PR",
        alias: "d",
        default: false,
      }),
  async handler(args) {
    await Instance.provide({
      directory: process.cwd(),
      async fn() {
        const project = Instance.project
        if (project.vcs !== "git") {
          UI.error("Could not find git repository. Please run this command from a git repository.")
          process.exit(1)
        }

        // Get current branch name
        const branchResult = await git(["branch", "--show-current"], { cwd: Instance.worktree })
        const branchName = branchResult.text().trim()

        if (!branchName) {
          UI.error("Could not determine current branch name.")
          process.exit(1)
        }

        // Check if branch has commits
        const baseBranch = args.base || "main"
        const logResult = await git(["log", `${baseBranch}..HEAD`, "--oneline"], { cwd: Instance.worktree })
        if (!logResult.text().trim()) {
          UI.error(`No commits on branch '${branchName}' ahead of '${baseBranch}'. Nothing to push.`)
          process.exit(1)
        }

        // Push branch to remote
        UI.println(`Pushing branch '${branchName}' to remote...`)
        const pushResult = await git(["push", "-u", "origin", branchName], { cwd: Instance.worktree })
        if (pushResult.exitCode !== 0 && !pushResult.stdout.toString()) {
          UI.error(`Failed to push: ${pushResult.stderr.toString()}`)
          process.exit(1)
        }

        // Create PR using gh CLI
        const title = args.title || branchName.replace(/-/g, " ")
        const prArgs = ["pr", "create", "--title", title, "--base", baseBranch]

        if (args.body) {
          prArgs.push("--body", args.body)
        }

        if (args.draft) {
          prArgs.push("--draft")
        }

        UI.println(`Creating PR: '${title}' from '${branchName}' into '${baseBranch}'...`)

        const prResult = await Process.run(["gh", ...prArgs])

        if (prResult.code === 0) {
          UI.println("✓ PR created successfully!")
          UI.println(prResult.stdout.toString().trim())
        } else {
          UI.error(`Failed to create PR: ${prResult.stderr.toString() || prResult.stdout.toString()}`)
          process.exit(1)
        }
      },
    })
  },
})
