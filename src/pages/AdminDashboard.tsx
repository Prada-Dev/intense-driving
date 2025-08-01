import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LogIn, LogOut, Shield, MapPin, Calendar, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Map from "@/components/Map";
import DateRangePicker from "@/components/DateRangePicker";
import { DateRange } from "react-day-picker";
import { format, subDays, startOfDay, endOfDay } from "date-fns";
import { useAdminAuth } from "@/hooks/use-admin-auth";

const AdminDashboard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const [courses, setCourses] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const [filteredBookings, setFilteredBookings] = useState<any[]>([]);
  
  // Use the custom admin auth hook
  const { isAdmin, isLoading: authLoading, login, logout } = useAdminAuth();

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

  // Filter bookings based on date range
  useEffect(() => {
    if (!dateRange?.from || !dateRange?.to) {
      setFilteredBookings(bookings);
      return;
    }

    const filtered = bookings.filter((booking) => {
      const bookingDate = new Date(booking.created_at);
      return bookingDate >= startOfDay(dateRange.from!) && bookingDate <= endOfDay(dateRange.to!);
    });
    setFilteredBookings(filtered);
  }, [bookings, dateRange]);

  // Generate map markers from bookings
  const generateMapMarkers = () => {
    // Sample locations - in a real app, you'd get these from your data
    const sampleLocations = [
      { id: "1", position: [51.505, -0.09] as [number, number], title: "London Office", description: "Main training center" },
      { id: "2", position: [51.507, -0.12] as [number, number], title: "Westminster Branch", description: "Secondary location" },
      { id: "3", position: [51.503, -0.08] as [number, number], title: "City Branch", description: "Financial district office" },
    ];
    return sampleLocations;
  };

  // Admin login handler
  const handleLogin = async () => {
    const result = await login(email, password);
    
    if (result.success) {
      toast({
        title: "Admin Access Granted",
        description: "Welcome to the admin dashboard.",
      });
      setEmail("");
      setPassword("");
    } else {
      toast({
        title: "Login failed",
        description: result.error || "An error occurred during login.",
        variant: "destructive",
      });
    }
  };

  // Logout handler
  const handleLogout = async () => {
    await logout();
    setEmail("");
    setPassword("");
    toast({
      title: "Logged out",
      description: "You have been logged out.",
    });
  };

  // Show loading state while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20 px-4 min-h-screen flex items-center">
          <div className="container mx-auto max-w-md">
            <Card>
              <CardContent className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Checking authentication...</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6">
              {/* Date Range Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filter by Date Range
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md">
                    <DateRangePicker
                      dateRange={dateRange}
                      onDateRangeChange={setDateRange}
                      placeholder="Filter bookings by date range"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="default">{filteredBookings.length}</Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      {dateRange?.from && dateRange?.to 
                        ? `${format(dateRange.from, 'MMM dd')} - ${format(dateRange.to, 'MMM dd')}`
                        : 'All time'
                      }
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Pending Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{filteredBookings.filter(b => b.status === "pending").length}</Badge>
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
                    <Badge variant="destructive">{filteredBookings.filter(b => b.status === "manual").length}</Badge>
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
                    {filteredBookings.slice(0, 5).map((b, i) => (
                      <li key={b.id || i} className="flex justify-between items-center">
                        <span>{b.student_id?.name || b.student_id || "Unknown"} - {b.course_id?.title || b.course_id || "Unknown Course"}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant={b.status === "confirmed" ? "default" : b.status === "pending" ? "secondary" : "outline"}>{b.status}</Badge>
                          <span className="text-xs text-gray-500">
                            {b.created_at ? format(new Date(b.created_at), 'MMM dd, yyyy') : 'N/A'}
                          </span>
                        </div>
                      </li>
                    ))}
                    {filteredBookings.length === 0 && <li>No bookings found for selected date range.</li>}
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
                    {filteredBookings.map((b) => (
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
                    {filteredBookings.length === 0 && <li>No bookings found for selected date range.</li>}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="map" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Training Locations Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Map 
                    center={[51.505, -0.09]}
                    zoom={12}
                    markers={generateMapMarkers()}
                    height="500px"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Booking Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>This Week</span>
                        <Badge variant="default">
                          {filteredBookings.filter(b => {
                            const bookingDate = new Date(b.created_at);
                            const weekAgo = subDays(new Date(), 7);
                            return bookingDate >= weekAgo;
                          }).length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>This Month</span>
                        <Badge variant="default">
                          {filteredBookings.filter(b => {
                            const bookingDate = new Date(b.created_at);
                            const monthAgo = subDays(new Date(), 30);
                            return bookingDate >= monthAgo;
                          }).length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Total Revenue</span>
                        <Badge variant="default">
                          £{filteredBookings.reduce((total, b) => {
                            return total + (b.course_id?.price || 0);
                          }, 0).toLocaleString()}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Status Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Confirmed</span>
                        <Badge variant="default">
                          {filteredBookings.filter(b => b.status === "confirmed").length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Pending</span>
                        <Badge variant="secondary">
                          {filteredBookings.filter(b => b.status === "pending").length}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Manual Follow-up</span>
                        <Badge variant="destructive">
                          {filteredBookings.filter(b => b.status === "manual").length}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
