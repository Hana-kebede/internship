# Start both backend and frontend servers
Write-Host "Starting Backend and Frontend Servers..." -ForegroundColor Green

# Function to check if a port is in use
function Test-Port {
    param([int]$Port)
    try {
        $connection = New-Object System.Net.Sockets.TcpClient
        $connection.Connect("localhost", $Port)
        $connection.Close()
        return $true
    }
    catch {
        return $false
    }
}

# Check if ports are available
if (Test-Port -Port 8000) {
    Write-Host "Warning: Port 8000 is already in use. Backend might not start properly." -ForegroundColor Yellow
}

if (Test-Port -Port 8081) {
    Write-Host "Warning: Port 8081 is already in use. Frontend might not start properly." -ForegroundColor Yellow
}

# Start Laravel backend server
Write-Host "Starting Laravel Backend Server on port 8000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '../interns-backend-main'; .\php artisan serve --host=0.0.0.0 --port=8000"

# Wait a moment for backend to start
Start-Sleep -Seconds 3

# Start React frontend server
Write-Host "Starting React Frontend Server on port 8081..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev"

# Wait a moment for frontend to start
Start-Sleep -Seconds 5

# Open browser
Write-Host "Opening browser..." -ForegroundColor Green
Start-Process "http://localhost:8081"

Write-Host "Both servers are starting..." -ForegroundColor Green
Write-Host "Backend: http://localhost:8000" -ForegroundColor Yellow
Write-Host "Frontend: http://localhost:8081" -ForegroundColor Yellow
Write-Host "API Endpoint: http://localhost:8000/api" -ForegroundColor Yellow
