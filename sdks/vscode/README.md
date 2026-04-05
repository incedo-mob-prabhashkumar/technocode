# TechnocodeX VS Code Extension

A Visual Studio Code extension that integrates [TechnocodeX](https://github.com/incedo-mob-prabhashkumar/technocode) directly into your development workflow.

## Prerequisites

This extension requires the TechnocodeX CLI to be installed:

```bash
cd packages/opencode
bun run build
```

## Features

- **Quick Launch**: Use `Cmd+Esc` (Mac) or `Ctrl+Esc` (Windows/Linux) to open TechnocodeX in a split terminal view
- **New Session**: Use `Cmd+Shift+Esc` (Mac) or `Ctrl+Shift+Esc` (Windows/Linux) to start a new session
- **Context Awareness**: Automatically share your current selection or tab with TechnocodeX
- **AI Chat**: Full AI coding assistant in VS Code side panel

## Build

```bash
cd sdks/vscode
bun run build
```

## Install

```bash
code --install-extension dist/technocodex-1.0.0.vsix
```

## Support

Create issues at https://github.com/incedo-mob-prabhashkumar/technocode/issues
