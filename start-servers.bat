@echo off
echo 🚀 Starting Hawi Software Development Servers...
echo.

REM Check if backend directory exists
if not exist "C:\Users\Hana\OneDrive\Desktop\demo\interns-backend-main" (
    echo ❌ Backend directory not found!
    echo Please ensure the Laravel backend is located at the correct path.
    pause
    exit /b 1
)

echo 📡 Starting Laravel Backend on http://localhost:8000...
start "Laravel Backend" powershell -NoExit -Command "cd 'C:\Users\Hana\OneDrive\Desktop\demo\interns-backend-main'; php artisan serve"

echo 🌐 Starting React Frontend on http://localhost:5173...
start "React Frontend" powershell -NoExit -Command "npm run dev"

echo.
echo 🎉 Both servers are now starting!
echo 📡 Backend: http://localhost:8000
echo 🌐 Frontend: http://localhost:5173
echo.
echo Press any key to close this window (servers will continue running)...
pause >nul

