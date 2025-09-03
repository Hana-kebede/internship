# Setup Instructions for Frontend + Backend

This project consists of a React frontend and a Laravel backend. Follow these instructions to run both servers together.

## Prerequisites

1. **Node.js** (v16 or higher)
2. **PHP** (v8.0 or higher)
3. **Composer** (for Laravel dependencies)
4. **MySQL** or another database supported by Laravel

## Backend Setup (Laravel)

1. Navigate to the backend directory:
   ```bash
   cd ../interns-backend-main
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```

4. Generate application key:
   ```bash
   php artisan key:generate
   ```

5. Configure your database in the `.env` file:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. Run database migrations:
   ```bash
   php artisan migrate
   ```

7. (Optional) Seed the database:
   ```bash
   php artisan db:seed
   ```

## Frontend Setup (React)

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the frontend root directory:
   ```env
   VITE_API_URL=http://localhost:8000/api
   VITE_ENABLE_MOCK_API=false
   VITE_DEV_MODE=true
   ```

## Running Both Servers

### Option 1: Using the Batch File (Windows)
Simply double-click `start-both-servers.bat` or run:
```bash
start-both-servers.bat
```

### Option 2: Using PowerShell Script
```bash
powershell -ExecutionPolicy Bypass -File start-servers.ps1
```

### Option 3: Manual Start

**Terminal 1 - Backend:**
```bash
cd ../interns-backend-main
php artisan serve --host=0.0.0.0 --port=8000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Access Points

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:8000
- **API Endpoint**: http://localhost:8000/api

## Troubleshooting

### Port Already in Use
If you get port conflicts:
- Backend port 8000: Change in `php artisan serve --port=8001`
- Frontend port 5173: Change in `vite.config.ts` or use `npm run dev -- --port=3000`

### CORS Issues
If you encounter CORS errors, ensure your Laravel backend has proper CORS configuration in `config/cors.php`.

### Database Connection
Make sure your database server is running and the credentials in `.env` are correct.

## Development Notes

- The frontend is configured to connect to the Laravel backend at `http://localhost:8000/api`
- API calls are handled through the `src/lib/api.ts` file
- Authentication tokens are stored in localStorage
- The backend should be running before starting the frontend for proper API connectivity

