# Connection Status - Frontend + Backend

## ✅ Current Status: CONNECTED

Both servers are now running and connected:

### 🚀 Frontend (React + Vite)
- **URL**: http://localhost:8082
- **Status**: ✅ Running
- **Framework**: React with TypeScript
- **UI Library**: Shadcn/ui components
- **Port**: 8082 (auto-selected since 8080 was in use)

### 🔧 Backend (Laravel)
- **URL**: http://localhost:8000
- **API Endpoint**: http://localhost:8000/api
- **Status**: ✅ Running
- **Framework**: Laravel PHP
- **Port**: 8000

## 🔗 API Configuration

The frontend is configured to connect to the Laravel backend:

```typescript
// src/lib/api.ts
const API_BASE_URL = 'http://localhost:8000/api';
```

## 📁 Project Structure

```
Frontend-HawiSoftware/          # React Frontend
├── src/
│   ├── lib/
│   │   ├── api.ts             # API client configuration
│   │   └── config.ts          # App configuration
│   └── ...
└── start-both-servers.bat     # Windows batch file to start both servers

interns-backend-main/           # Laravel Backend
├── app/
├── routes/
├── database/
└── ...
```

## 🚀 How to Start Both Servers

### Option 1: Batch File (Recommended)
```bash
.\start-both-servers.bat
```

### Option 2: PowerShell Script
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

## 🌐 Access Points

- **Frontend Application**: http://localhost:8082
- **Backend API**: http://localhost:8000/api
- **Laravel Backend**: http://localhost:8000

## 🔧 API Endpoints Available

The frontend can now communicate with these Laravel API endpoints:

- **Authentication**: `/api/login`, `/api/register`, `/api/logout`
- **Users**: `/api/user`, `/api/users`
- **Projects**: `/api/userprojects`
- **Service Requests**: `/api/user_service-requests`
- **Messages**: `/api/usermessages`
- **Blog**: `/api/blog`, `/api/blogs`
- **Admin**: `/api/admin/*` endpoints
- **Contact**: `/api/contact`

## ✅ Verification

Both servers are running and the browser should have opened to http://localhost:8082 showing your React frontend application.

The frontend is now connected to the Laravel backend and can make API calls through the configured endpoints in `src/lib/api.ts`.

