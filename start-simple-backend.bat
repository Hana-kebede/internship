@echo off
echo Starting Simple PHP Backend for Testing...
echo.

echo Starting Simple PHP Backend Server...
start "Simple PHP Backend" cmd /k "cd /d C:\Users\Hana\OneDrive\Desktop\New folder\Frontend-HawiSoftware && C:\xampp\php\php.exe -S 127.0.0.1:8000 -t ."

echo.
echo Simple PHP Backend is starting...
echo Backend: http://127.0.0.1:8000
echo API: http://127.0.0.1:8000/api/home
echo.
echo Press any key to exit this launcher...
pause >nul

