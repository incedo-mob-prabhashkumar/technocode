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

## ⚠️ Requirements

**TechnocodeX requires [Bun](https://bun.sh) runtime to run.**

Bun is a fast JavaScript runtime (like Node.js) that TechnocodeX is built on.

---

## Installation

### Step 1: Install Bun (One Time)

```powershell
# Windows (PowerShell)
powershell -Command "irm bun.sh | iex"
```

```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash
```

### Step 2: Run TechnocodeX

```bash
# Clone the repository
git clone https://github.com/incedo-mob-prabhashkumar/technocode
cd technocode

# Run
cd packages/opencode
bun run start
```

### Or use the launcher (auto-installs bun):

```bash
# Windows
technocode.bat

# Linux/Mac
./technocode.sh
```

---

## Quick Start

```bash
cd packages/opencode
bun run start
```

Then type your message and press Enter to start coding with AI.

---

## Features

- ✅ AI coding assistant (TUI - Terminal UI)
- ✅ Multiple LLM providers (OpenAI, Anthropic, Ollama, Azure, etc.)
- ✅ GitHub MCP integration
- ✅ Skills/Plugins system
- ✅ VS Code extension
- ✅ Git auto-create PR

---

## Configuration

Set your API key:

```bash
export OPENCODE_API_KEY=your_key_here
# or
export ANTHROPIC_API_KEY=your_claude_key
```

Or use `/connect` in the CLI to add providers.

---

## Supported Providers

| Provider        | Description                |
| --------------- | -------------------------- |
| TechnocodeX Zen | Cloud models (recommended) |
| Anthropic       | Claude models              |
| OpenAI          | GPT models                 |
| Azure           | Azure OpenAI               |
| Ollama          | Local models               |
| Hugging Face    | HF inference               |

---

## Documentation

For more info, check [packages/opencode/README.md](./packages/opencode/README.md).

---

**Star us on GitHub** [GitHub](https://github.com/incedo-mob-prabhashkumar/technocode)
