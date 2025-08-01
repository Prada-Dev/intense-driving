# Admin Dashboard Setup Guide

This guide will help you set up the admin authentication system that checks the `profiles` table for admin roles.

## Prerequisites

- Supabase project set up
- Access to Supabase Dashboard

## Step 1: Create the Profiles Table

1. Go to your Supabase Dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase/profiles_table.sql`
4. Run the SQL script

This will create:
- A `profiles` table with role-based authentication
- Row Level Security (RLS) policies
- Automatic profile creation on user signup
- Triggers for updating timestamps

## Step 2: Create an Admin User

### Option A: Create via Supabase Dashboard

1. Go to Authentication > Users in your Supabase Dashboard
2. Click "Add User"
3. Enter the admin email and password
4. Copy the user ID (UUID) from the user list

### Option B: Create via SQL

```sql
-- First, create the user in auth.users (this happens automatically when they sign up)
-- Then update their role to admin
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'your-admin-email@example.com';
```

## Step 3: Test the Admin Access

1. Start your development server: `npm run dev`
2. Navigate to `/admin`
3. Log in with your admin credentials
4. You should see the admin dashboard with all features

## Database Schema

The `profiles` table has the following structure:

```sql
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'instructor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Role Types

- `user`: Regular user (default)
- `admin`: Administrator with full access to admin dashboard
- `instructor`: Driving instructor (for future use)

## Security Features

- **Row Level Security (RLS)**: Users can only access their own profile
- **Role-based Access**: Only admins can update user roles
- **Automatic Profile Creation**: Profiles are created automatically when users sign up
- **Secure Role Checking**: Admin status is verified against the database

## Troubleshooting

### "Unable to verify admin privileges" Error

This usually means:
1. The `profiles` table doesn't exist
2. The user doesn't have a profile record
3. RLS policies are blocking access

**Solution**: Run the SQL script again and ensure the user has a profile record.

### "Access Denied" Error

This means the user exists but doesn't have admin role.

**Solution**: Update the user's role in the database:
```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'user-email@example.com';
```

### Profile Not Created Automatically

If profiles aren't created when users sign up:

**Solution**: Check that the trigger is properly set up:
```sql
-- Check if trigger exists
SELECT * FROM information_schema.triggers 
WHERE trigger_name = 'on_auth_user_created';
```

## API Usage

The admin authentication now works as follows:

1. User logs in with email/password
2. System checks `profiles` table for user's role
3. If role is 'admin', access is granted
4. If role is not 'admin', access is denied

The system automatically checks for existing admin sessions when the dashboard loads, so users don't need to log in again if they're already authenticated as admin.