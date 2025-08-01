import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface UseAdminAuthReturn {
  isAdmin: boolean;
  isLoading: boolean;
  checkAdminRole: (userId: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
}

export const useAdminAuth = (): UseAdminAuthReturn => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Helper function to check if user has admin role
  const checkAdminRole = async (userId: string): Promise<boolean> => {
    try {
      console.log("Checking admin role for user:", userId);
      
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
        return false;
      }

      console.log("Profile data:", profileData);
      const isAdmin = profileData?.role === "admin";
      console.log("Is admin:", isAdmin);
      
      return isAdmin;
    } catch (error) {
      console.error("Error checking admin role:", error);
      return false;
    }
  };

  // Login function
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      console.log("Attempting login for:", email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Auth error:", error);
        return { success: false, error: error.message };
      }

      const user = data?.user;
      console.log("User authenticated:", user?.id);
      
      if (user) {
        const isAdminUser = await checkAdminRole(user.id);
        
        if (isAdminUser) {
          console.log("Admin access granted");
          setIsAdmin(true);
          return { success: true };
        } else {
          console.log("Admin access denied - user role is not admin");
          await supabase.auth.signOut();
          return { success: false, error: "You do not have admin privileges. Please contact an administrator." };
        }
      } else {
        console.log("No user found after authentication");
        await supabase.auth.signOut();
        return { success: false, error: "User not found." };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "An unexpected error occurred." };
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  // Check current user on mount
  useEffect(() => {
    const checkCurrentUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const isAdminUser = await checkAdminRole(user.id);
          setIsAdmin(isAdminUser);
        }
      } catch (error) {
        console.error("Error checking current user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkCurrentUser();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          const isAdminUser = await checkAdminRole(session.user.id);
          setIsAdmin(isAdminUser);
        } else if (event === 'SIGNED_OUT') {
          setIsAdmin(false);
        }
        setIsLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return {
    isAdmin,
    isLoading,
    checkAdminRole,
    login,
    logout,
  };
};