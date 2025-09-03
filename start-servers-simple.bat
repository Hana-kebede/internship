@echo off
echo Starting Hawi Software Fullstack Application...
echo.

echo Starting Laravel Backend Server...
cd interns-backend-main
start "Laravel Backend" cmd /k "C:\xampp\php\php.exe artisan serve --host=127.0.0.1 --port=8000"
cd ..

echo.
echo Starting React Frontend Server...
start "React Frontend" cmd /k "npm run dev"

echo.
echo Both servers are starting...
echo Backend: http://127.0.0.1:8000
echo Frontend: http://localhost:5173
echo.
echo Press any key to exit this launcher...
pause >nul

