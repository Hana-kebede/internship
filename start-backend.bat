@echo off
echo Starting Laravel Backend Server...
echo.

cd ../interns-backend-main

echo Current directory: %CD%
echo.

echo Starting PHP server on port 8000...
.\php -S localhost:8000 -t public

pause

