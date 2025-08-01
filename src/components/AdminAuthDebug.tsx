import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const AdminAuthDebug = () => {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const checkProfilesTable = async () => {
    setLoading(true);
    try {
      // Check if profiles table exists and get its structure
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .limit(1);

      if (error) {
        console.error('Profiles table error:', error);
        setDebugInfo({
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        toast({
          title: "Profiles Table Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log('Profiles table accessible:', data);
        setDebugInfo({
          success: true,
          message: 'Profiles table is accessible',
          sampleData: data
        });
        toast({
          title: "Profiles Table OK",
          description: "Profiles table is accessible and working",
        });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setDebugInfo({
        error: 'Unexpected error occurred',
        details: err
      });
    } finally {
      setLoading(false);
    }
  };

  const checkCurrentUser = async () => {
    setLoading(true);
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error('Auth error:', error);
        setDebugInfo({
          authError: error.message,
          user: null
        });
      } else {
        console.log('Current user:', user);
        
        if (user) {
          // Check their profile
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          setDebugInfo({
            user: {
              id: user.id,
              email: user.email,
              profile: profile,
              profileError: profileError
            }
          });
        } else {
          setDebugInfo({
            user: null,
            message: 'No user currently authenticated'
          });
        }
      }
    } catch (err) {
      console.error('Error checking current user:', err);
      setDebugInfo({
        error: 'Error checking current user',
        details: err
      });
    } finally {
      setLoading(false);
    }
  };

  const testAdminRole = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setDebugInfo({
          error: 'No user authenticated',
          message: 'Please log in first to test admin role'
        });
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error) {
        setDebugInfo({
          error: 'Error fetching profile',
          details: error
        });
      } else {
        const isAdmin = profile?.role === 'admin';
        setDebugInfo({
          user: user.email,
          profile: profile,
          isAdmin: isAdmin,
          message: isAdmin ? 'User has admin role' : 'User does not have admin role'
        });
      }
    } catch (err) {
      console.error('Error testing admin role:', err);
      setDebugInfo({
        error: 'Error testing admin role',
        details: err
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Admin Authentication Debug</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button 
            onClick={checkProfilesTable} 
            disabled={loading}
            variant="outline"
          >
            Check Profiles Table
          </Button>
          <Button 
            onClick={checkCurrentUser} 
            disabled={loading}
            variant="outline"
          >
            Check Current User
          </Button>
          <Button 
            onClick={testAdminRole} 
            disabled={loading}
            variant="outline"
          >
            Test Admin Role
          </Button>
        </div>

        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-sm text-gray-600 mt-2">Loading...</p>
          </div>
        )}

        {debugInfo && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Debug Information:</h3>
            <pre className="text-xs overflow-auto max-h-64">
              {JSON.stringify(debugInfo, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
};