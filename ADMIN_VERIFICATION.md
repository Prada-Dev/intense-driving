# Admin Authentication Verification Guide

This guide will help you verify that the admin authentication system is working correctly by checking the `profiles` table for the `role: admin` field.

## ✅ **Current Implementation Status**

The admin authentication system is now properly configured to:

1. **Check the `profiles` table** for user roles
2. **Verify `role = 'admin'`** before granting access
3. **Provide detailed logging** for debugging
4. **Handle authentication errors** gracefully

## 🔍 **Verification Steps**

### **Step 1: Check Database Setup**

1. **Run the SQL script** in your Supabase dashboard:
   ```sql
   -- Copy and run the contents of supabase/profiles_table.sql
   ```

2. **Verify the profiles table exists**:
   ```sql
   SELECT * FROM information_schema.tables 
   WHERE table_name = 'profiles';
   ```

3. **Check the table structure**:
   ```sql
   SELECT column_name, data_type, is_nullable 
   FROM information_schema.columns 
   WHERE table_name = 'profiles';
   ```

### **Step 2: Create an Admin User**

1. **Sign up a new user** through your application
2. **Update their role to admin**:
   ```sql
   UPDATE public.profiles 
   SET role = 'admin' 
   WHERE email = 'your-admin-email@example.com';
   ```

3. **Verify the admin role**:
   ```sql
   SELECT id, email, role 
   FROM public.profiles 
   WHERE email = 'your-admin-email@example.com';
   ```

### **Step 3: Test the Authentication**

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to `/admin`**

3. **Use the debug tools** on the login page to:
   - Check if the profiles table is accessible
   - Verify the current user's authentication status
   - Test the admin role verification

4. **Check browser console** for detailed logs:
   - Authentication attempts
   - Profile queries
   - Role verification results

## 🔧 **Debug Tools Available**

The admin login page now includes a debug component with three buttons:

### **1. Check Profiles Table**
- Verifies the `profiles` table exists and is accessible
- Shows any database connection errors
- Displays sample data structure

### **2. Check Current User**
- Shows the currently authenticated user (if any)
- Displays their profile information
- Reveals any profile-related errors

### **3. Test Admin Role**
- Tests the exact admin role verification logic
- Shows whether the current user has admin privileges
- Displays the role value from the database

## 📋 **Expected Console Logs**

When you attempt to log in as an admin, you should see:

```
Attempting login for: admin@example.com
User authenticated: [user-id]
Checking admin role for user: [user-id]
Profile data: { role: "admin" }
Is admin: true
Admin access granted
```

## ❌ **Common Issues and Solutions**

### **Issue: "Profiles table doesn't exist"**
**Solution**: Run the SQL script from `supabase/profiles_table.sql`

### **Issue: "User not found in profiles table"**
**Solution**: 
```sql
INSERT INTO public.profiles (id, email, full_name, role) 
VALUES ('[user-id]', 'admin@example.com', 'Admin User', 'admin');
```

### **Issue: "Role is not 'admin'"**
**Solution**:
```sql
UPDATE public.profiles 
SET role = 'admin' 
WHERE email = 'admin@example.com';
```

### **Issue: "RLS policy blocking access"**
**Solution**: Check that the RLS policies are correctly set up in the SQL script

## 🧪 **Testing Checklist**

- [ ] Profiles table exists and is accessible
- [ ] Admin user has `role = 'admin'` in the database
- [ ] Authentication flow works correctly
- [ ] Admin access is granted for admin users
- [ ] Non-admin users are denied access
- [ ] Error messages are clear and helpful
- [ ] Console logs show the verification process

## 🔒 **Security Verification**

The system now properly:

- ✅ Checks database for admin role instead of client-side metadata
- ✅ Uses Row Level Security (RLS) policies
- ✅ Handles authentication errors gracefully
- ✅ Provides detailed logging for debugging
- ✅ Automatically logs out non-admin users
- ✅ Maintains session state correctly

## 📞 **Support**

If you encounter any issues:

1. **Check the browser console** for detailed error logs
2. **Use the debug tools** on the admin login page
3. **Verify the database setup** with the SQL queries above
4. **Check the network tab** for failed API requests

The authentication system is now robust and secure, properly checking the `profiles` table for admin roles before granting access to the admin dashboard.