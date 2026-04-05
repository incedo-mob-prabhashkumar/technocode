<p align="center">
  <a href="https://github.com/incedo-mob-prabhashkumar/technocode">
  <picture>
    <source srcset="assets/logo-dark.png" media="(prefers-color-scheme: dark)">
    <source srcset="assets/logo-light.png" media="(prefers-color-scheme: light)">
    <img src="assets/logo-light.png" alt="TechnocodeX logo" width="400">
  </picture>
</p>
  </a>
</p>
<p align="center">The AI coding agent - powered by TechnocodeX.</p>
<p align="center">
  <a href="https://github.com/incedo-mob-prabhashkumar/technocode"><img alt="GitHub" src="https://img.shields.io/github/stars/incedo-mob-prabhashkumar/technocode?style=flat-square" /></a>
</p>

Copyright (c) 2025 Prabhasingh. All rights reserved.

---

### Installation

```bash
# Clone the repository
git clone https://github.com/incedo-mob-prabhashkumar/technocode

# Install dependencies
cd technocode
bun install

# Run
bun dev
```

### Quick Start

```bash
# Start the CLI
cd packages/opencode
bun run dev
```

### Supported Providers

TechnocodeX supports multiple LLM providers:

#### 1. TechnocodeX Zen (Recommended)

```bash
export OPENCODE_API_KEY=your_key_here
```

#### 2. Ollama (Local)

```bash
# Start Ollama first
ollama serve

# Configure in opencode.jsonc
{
  "provider": {
    "ollama": {
      "api": "http://localhost:11434/v1",
      "env": ["OPENAI_API_KEY"],
      "models": {
        "llama3.2": { "id": "llama3.2" },
        "qwen2.5-coder": { "id": "qwen2.5-coder" }
      }
    }
  }
}
```

#### 3. Azure OpenAI

```bash
export AZURE_OPENAI_API_KEY=your_azure_key

# Configure in opencode.jsonc
{
  "provider": {
    "azure": {
      "api": "https://your-resource.openai.azure.com",
      "apiVersion": "2024-02-01",
      "env": ["AZURE_OPENAI_API_KEY"],
      "models": {
        "gpt-4": { "id": "gpt-4" },
        "gpt-5": { "id": "gpt-5" }
      }
    }
  }
}
```

#### 4. Anthropic (Claude)

```bash
export ANTHROPIC_API_KEY=your_claude_key

# Configure in opencode.jsonc
{
  "provider": {
    "anthropic": {
      "env": ["ANTHROPIC_API_KEY"],
      "models": {
        "claude-sonnet-4": { "id": "claude-sonnet-4-20250514" },
        "claude-opus-4": { "id": "claude-opus-4-20250514" }
      }
    }
  }
}
```

#### 5. Hugging Face

```bash
export HF_TOKEN=your_hf_token

# Configure in opencode.jsonc
{
  "provider": {
    "huggingface": {
      "api": "https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct/v1",
      "env": ["HF_TOKEN"],
      "models": {
        "llama3": { "id": "meta-llama/Meta-Llama-3-8B-Instruct" }
      }
    }
  }
}
```

#### 6. OpenAI Compatible (Any API)

```bash
export OPENAI_API_KEY=your_api_key

# Configure in opencode.jsonc
{
  "provider": {
    "custom": {
      "api": "https://your-api-endpoint.com/v1",
      "env": ["OPENAI_API_KEY"],
      "models": {
        "model-name": { "id": "model-name" }
      }
    }
  }
}
```

### Configuration

Create `opencode.jsonc` in your project directory with your provider settings.

### Skills & Plugins

TechnocodeX supports skills for extended functionality:

```bash
# Create a skill directory
mkdir -p skills/my-skill

# Create SKILL.md with instructions
echo "# My Skill" > skills/my-skill/SILL.md
```

Skills are loaded from:

- `./skills/` (project directory)
- `~/.technocode/skills/` (global)

### MCP Servers

TechnocodeX supports MCP (Model Context Protocol) servers for extended capabilities:

```bash
# List available MCP servers
bun run index.ts mcp list

# Add a MCP server
bun run index.ts mcp add github "npx -y @github/mcp-server"

# Add GitHub MCP (official)
bun run index.ts mcp add github https://github.com/github/github-mcp-server

# Add custom MCP server
bun run index.ts mcp add my-server "npx -y my-mcp-package"
```

#### Popular MCP Servers:

| Server         | Description                 |
| -------------- | --------------------------- |
| `github`       | GitHub PRs, issues, commits |
| `filesystem`   | File operations             |
| `brave-search` | Web search                  |
| `slack`        | Slack integration           |
| `google-maps`  | Maps & directions           |

When MCP servers are added, the AI can use their tools directly in conversations.

### VS Code Extension

TechnocodeX is also available as a VS Code extension:

```bash
# Build the extension
cd sdks/vscode
bun run build

# Install locally
code --install-extension dist/technocodex-1.0.0.vsix
```

Or install from VS Code Marketplace (coming soon).

The extension provides:

- AI chat panel in VS Code
- Terminal integration
- File operations
- GitHub integration via MCP

### Documentation

For more info on how to configure TechnocodeX, check the [packages/opencode/README.md](./packages/opencode/README.md).

---

**Star us on GitHub** [GitHub](https://github.com/incedo-mob-prabhashkumar/technocode)
