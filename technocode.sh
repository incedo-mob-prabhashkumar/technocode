#!/bin/bash

# TechnocodeX Launcher
# Auto-installs bun if needed, then runs

# Check if bun exists
if ! command -v bun &> /dev/null; then
    echo "Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    source ~/.bashrc
fi

# Run technocode
cd "$(dirname "$0")/packages/opencode"
bun run start