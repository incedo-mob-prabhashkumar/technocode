# TechnocodeX

AI coding assistant CLI with browser UI, powered by TypeScript/Bun.

Copyright (c) 2025 Prabhasingh. All rights reserved.

## Install

```bash
bun install
```

## Run

### Development Mode (Browser UI)

Start the development server with browser UI:

```bash
bun dev
```

This starts the app with hot-reload. Open the browser at:

- http://localhost:5173 (or the port shown in terminal)

Stop:

- Press `Ctrl+C` in the terminal

### Build and Run Production

```bash
bun run build
bun run index.ts
```

### Run Without Browser (CLI Only)

```bash
bun run index.ts
```

### Type Checking

```bash
bun typecheck
```

### Run Tests

```bash
bun test
```

## Python Backend Integration

TechnocodeX can proxy requests to a Python backend. Set the environment variable before running:

```bash
# Point to Python backend
export TECHNOCODEX_PY_BACKEND_URL=http://127.0.0.1:8000
export TECHNOCODEX_PY_BACKEND_PROVIDER=ollama
export TECHNOCODEX_PY_BACKEND_MODEL=qwen2.5-coder

# Then run
bun dev
```

## Available Scripts

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `bun dev`          | Start dev server with browser UI |
| `bun run build`    | Build for production             |
| `bun run index.ts` | Run production build             |
| `bun typecheck`    | Run TypeScript type checking     |
| `bun test`         | Run tests                        |
| `bun db generate`  | Generate database migrations     |

## Troubleshooting

### Port Already in Use

```bash
# Find what's using the port
netstat -ano | findstr :5173

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or use a different approach
bunx kill-port 5173
```

### Clear Database Cache

```bash
# Remove SQLite database
rm -rf .technocode.db
```

### Build Errors

```bash
# Clean and reinstall
rm -rf node_modules dist
bun install
bun run build
```

### Hot Reload Not Working

Press `Ctrl+C` to stop the dev server, then restart with `bun dev`.
