@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0herramientas\actualizar-entregas.ps1" -LibraryRoot "%~dp0."
pause
