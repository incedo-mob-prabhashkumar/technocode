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

### Documentation

For more info on how to configure TechnocodeX, check the [packages/opencode/README.md](./packages/opencode/README.md).

---

**Star us on GitHub** [GitHub](https://github.com/incedo-mob-prabhashkumar/technocode)
