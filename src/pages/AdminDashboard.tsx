import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LogIn, LogOut, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const [courses, setCourses] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAdmin) return;
    setLoading(true);
    const fetchData = async () => {
      const { data: coursesData } = await supabase.from("courses").select("*");
      const { data: bookingsData } = await supabase.from("bookings").select("*, course_id(*), student_id(*)").order("created_at", { ascending: false });
      setCourses(coursesData || []);
      setBookings(bookingsData || []);
      setLoading(false);
    };
    fetchData();
  }, [isAdmin]);

  // Admin login handler
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    // Check is_admin flag in user_metadata
    const user = data?.user;
    if (user?.user_metadata?.is_admin) {
      setIsAdmin(true);
      toast({
        title: "Admin Access Granted",
        description: "Welcome to the admin dashboard.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "You do not have admin privileges.",
        variant: "destructive",
      });
      await supabase.auth.signOut();
    }
  };

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setEmail("");
    setPassword("");
    toast({
      title: "Logged out",
      description: "You have been logged out.",
    });
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20 px-4 min-h-screen flex items-center">
          <div className="container mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" /> Admin Login
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter admin email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </div>
                  </div>
                  <Button onClick={handleLogin} className="w-full">
                    <LogIn className="mr-2 h-4 w-4" /> Login
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // Dashboard Home Panel (placeholder widgets)
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default">{bookings.length}</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{bookings.filter(b => b.status === "pending").length}</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default">{courses.length}</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Manual Follow-up</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="destructive">{bookings.filter(b => b.status === "manual").length}</Badge>
                  </CardContent>
                </Card>
              </div>
              {/* Recent Bookings List */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bookings.slice(0, 5).map((b, i) => (
                      <li key={b.id || i} className="flex justify-between items-center">
                        <span>{b.student_id?.name || b.student_id || "Unknown"} - {b.course_id?.title || b.course_id || "Unknown Course"}</span>
                        <Badge variant={b.status === "confirmed" ? "default" : b.status === "pending" ? "secondary" : "outline"}>{b.status}</Badge>
                      </li>
                    ))}
                    {bookings.length === 0 && <li>No bookings found.</li>}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="courses" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {courses.map((c) => (
                      <li key={c.id} className="flex justify-between items-center">
                        <span>{c.title} - £{c.price} ({c.duration})</span>
                        <Badge variant={c.is_active ? "default" : "secondary"}>{c.is_active ? "Active" : "Inactive"}</Badge>
                      </li>
                    ))}
                    {courses.length === 0 && <li>No courses found.</li>}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bookings.map((b) => (
                      <li key={b.id} className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-2">
                        <div>
                          <span className="font-semibold">{b.student_id?.name || b.student_id || "Unknown"}</span> booked <span className="font-semibold">{b.course_id?.title || b.course_id || "Unknown Course"}</span>
                          <span className="ml-2 text-xs text-gray-500">({b.preferred_date})</span>
                        </div>
                        <div className="flex gap-2 mt-2 md:mt-0">
                          <Badge variant={b.status === "confirmed" ? "default" : b.status === "pending" ? "secondary" : "outline"}>{b.status}</Badge>
                          <Badge variant={b.payment_status === "paid" ? "default" : "secondary"}>{b.payment_status}</Badge>
                        </div>
                      </li>
                    ))}
                    {bookings.length === 0 && <li>No bookings found.</li>}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Other tabs will be implemented next */}
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
