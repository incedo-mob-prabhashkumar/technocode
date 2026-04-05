@echo off
setlocal

REM TechnocodeX - Auto-installs bun if needed, then runs

REM Check if bun exists
where bun >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Installing Bun...
    powershell -Command "irm bun.sh | iex"
)

REM Run technocode
cd /d "%~dp0packages\opencode"
bun run start