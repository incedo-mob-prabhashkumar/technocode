@echo off
setlocal EnableDelayedExpansion

REM TechnocodeX Launcher for Windows

REM Find bun - check multiple locations
set "BUN_PATH="
where bun >nul 2>nul
if %ERRORLEVEL% equ 0 set "BUN_PATH=bun"

if not defined BUN_PATH (
    if exist "%USERPROFILE%\.bun\bin\bun.exe" set "BUN_PATH=%USERPROFILE%\.bun\bin\bun.exe"
)

if not defined BUN_PATH (
    if exist "%LOCALAPPDATA%\bun\bin\bun.exe" set "BUN_PATH=%LOCALAPPDATA%\bun\bin\bun.exe"
)

REM Install bun if not found
if not defined BUN_PATH (
    echo Installing Bun runtime...
    powershell -Command "irm bun.sh | iex"
    
    if exist "%USERPROFILE%\.bun\bin\bun.exe" (
        set "BUN_PATH=%USERPROFILE%\.bun\bin\bun.exe"
    ) else (
        echo Failed to install Bun. Please install manually from https://bun.sh
        pause
        exit /b 1
    )
)

REM Add bun to PATH for this session
set "PATH=%USERPROFILE%\.bun\bin;%PATH%"

REM Change to opencode directory
cd /d "%~dp0packages\opencode"

REM Run technocode
echo Starting TechnocodeX...
"%BUN_PATH%" run start