@echo off
echo Starting Backend and Frontend Servers...
echo.

REM Start Laravel backend server
echo Starting Laravel Backend Server on port 8000...
start "Laravel Backend" powershell -NoExit -Command "cd '../interns-backend-main'; C:\xampp\php\php.exe -S localhost:8000 -t public"

REM Wait for backend to start
timeout /t 3 /nobreak >nul

REM Start React frontend server
echo Starting React Frontend Server on port 8081...
start "React Frontend" powershell -NoExit -Command "npm run dev"

REM Wait for frontend to start
timeout /t 5 /nobreak >nul

REM Open browser
echo Opening browser...
start http://localhost:8081

echo.
echo Both servers are starting...
echo Backend: http://localhost:8000
echo Frontend: http://localhost:8081
echo API Endpoint: http://localhost:8000/api
echo.
pause

