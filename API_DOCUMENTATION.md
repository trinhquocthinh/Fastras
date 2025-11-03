# Mock API Documentation

## Overview

This project includes a complete mock API implementation with:
- ⚡ Service layer via Axios
- 🔐 Full Authentication flow (Login, Register, Logout, Forgot Password, Reset Password)
- 📦 JSON-based data storage
- 🔑 JWT token authentication
- 🛡️ Password hashing with bcryptjs

## Default Test Credentials

Use these credentials to test the login functionality:

**Admin User:**
- Email: `admin@fastras.com`
- Password: `password123`

**Test User:**
- Email: `user@example.com`
- Password: `password123`

## API Endpoints

### Authentication

#### POST `/api/auth/login`
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "remember": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "1",
      "email": "user@example.com",
      "fullName": "Test User"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": "3",
      "email": "john@example.com",
      "fullName": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST `/api/auth/logout`
Logout the current user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

#### POST `/api/auth/forgot-password`
Request a password reset link.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "If an account exists with this email, a password reset link has been sent"
}
```

**Note:** In development, the reset link will be logged to the console.

#### POST `/api/auth/reset-password`
Reset password with a valid token.

**Request Body:**
```json
{
  "token": "abc123...",
  "password": "newpassword123",
  "confirmPassword": "newpassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password has been reset successfully"
}
```

#### GET `/api/auth/me`
Get current user information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "1",
      "email": "user@example.com",
      "fullName": "Test User"
    }
  }
}
```

## Service Layer

The service layer is built with Axios and provides a clean API for authentication operations.

### Using the Auth Service

```typescript
import { authService } from '@/services';

// Login
const { user, token } = await authService.login({
  email: 'user@example.com',
  password: 'password123',
  remember: true
});

// Register
const { user, token } = await authService.register({
  fullName: 'John Doe',
  email: 'john@example.com',
  password: 'password123',
  confirmPassword: 'password123'
});

// Logout
await authService.logout();

// Forgot Password
const message = await authService.forgotPassword({
  email: 'user@example.com'
});

// Reset Password
const message = await authService.resetPassword({
  token: 'reset-token',
  password: 'newpassword123',
  confirmPassword: 'newpassword123'
});

// Get Current User
const user = await authService.getCurrentUser();

// Check if authenticated
const isAuth = authService.isAuthenticated();
```

### Using the Auth Hook

For React components, use the `useAuth` hook:

```typescript
import { useAuth } from '@/hooks';

function MyComponent() {
  const { login, register, logout, loading, error } = useAuth();

  const handleLogin = async () => {
    try {
      await login({
        email: 'user@example.com',
        password: 'password123'
      });
      // User is now logged in and redirected
    } catch (err) {
      // Error is automatically set in the hook
      console.error(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
```

## Data Storage

User data is stored in `src/data/users.json`. This is a simple JSON file that acts as a mock database.

**Important:** This is for development only. In production, use a real database.

## Environment Variables

Copy `.env.example` to `.env.local` and update the values:

```bash
cp .env.example .env.local
```

**Key variables:**
- `JWT_SECRET`: Secret key for JWT token signing (change in production!)
- `NEXT_PUBLIC_API_URL`: Base URL for API calls (default: `/api`)
- `NEXT_PUBLIC_APP_URL`: Application URL (used in password reset emails)

## Security Notes

⚠️ **Development Only**: This mock API is for development and demonstration purposes only.

For production:
1. Use a real database (PostgreSQL, MongoDB, etc.)
2. Store passwords securely with proper hashing
3. Use environment variables for sensitive data
4. Implement rate limiting
5. Add CSRF protection
6. Use HTTPS
7. Implement proper session management
8. Add email verification
9. Implement two-factor authentication
10. Use secure, randomly generated JWT secrets

## Testing the API

You can test the API using the browser or tools like Postman/Insomnia:

1. **Browser**: Navigate to the authentication pages and use the forms
2. **cURL**:
   ```bash
   curl -X POST http://localhost:3000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@fastras.com","password":"password123"}'
   ```

## File Structure

```
src/
├── app/
│   └── api/
│       └── auth/
│           ├── login/route.ts
│           ├── register/route.ts
│           ├── logout/route.ts
│           ├── forgot-password/route.ts
│           ├── reset-password/route.ts
│           └── me/route.ts
├── data/
│   └── users.json
├── lib/
│   └── db.ts
├── services/
│   ├── apiClient.ts
│   ├── authService.ts
│   ├── types.ts
│   └── index.ts
└── hooks/
    ├── useAuth.ts
    └── index.ts
```

## Error Handling

All API routes return consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

Common HTTP status codes:
- `200`: Success
- `201`: Created (registration)
- `400`: Bad request (validation errors)
- `401`: Unauthorized (invalid credentials)
- `404`: Not found
- `409`: Conflict (email already exists)
- `500`: Server error
