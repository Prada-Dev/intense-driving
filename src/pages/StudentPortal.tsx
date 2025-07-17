
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Calendar, 
  BookOpen, 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Download,
  Settings,
  LogIn,
  UserPlus,
  Eye,
  EyeOff
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();

  // Mock student data
  const studentData = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+44 7890 123456",
    course: "Intensive Course",
    instructor: "David Thompson",
    progress: 75,
    lessonsCompleted: 15,
    totalLessons: 20,
    nextLesson: "Tomorrow, 2:00 PM",
    testDate: "March 15, 2024"
  };

  const upcomingLessons = [
    {
      date: "Tomorrow",
      time: "2:00 PM - 4:00 PM",
      instructor: "David Thompson",
      type: "Practical Lesson",
      status: "confirmed"
    },
    {
      date: "March 12",
      time: "10:00 AM - 12:00 PM",
      instructor: "David Thompson",
      type: "Motorway Practice",
      status: "confirmed"
    },
    {
      date: "March 14",
      time: "3:00 PM - 5:00 PM",
      instructor: "David Thompson",
      type: "Mock Test",
      status: "pending"
    }
  ];

  const completedLessons = [
    {
      date: "March 8",
      time: "2:00 PM - 4:00 PM",
      instructor: "David Thompson",
      type: "City Driving",
      rating: 5,
      notes: "Excellent progress with roundabouts and traffic management"
    },
    {
      date: "March 6",
      time: "10:00 AM - 12:00 PM",
      instructor: "David Thompson",
      type: "Parking Practice",
      rating: 4,
      notes: "Good improvement in parallel parking, need to work on bay parking"
    },
    {
      date: "March 4",
      time: "3:00 PM - 5:00 PM",
      instructor: "David Thompson",
      type: "Theory Review",
      rating: 5,
      notes: "Ready for theory test, excellent understanding of road rules"
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in to your student portal.",
    });
  };

  const handleRegister = () => {
    toast({
      title: "Registration Successful!",
      description: "Please check your email to verify your account.",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20 px-4 min-h-screen flex items-center">
          <div className="container mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Student Portal</CardTitle>
                <CardDescription>
                  Access your lessons, progress, and materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input 
                          id="password" 
                          type={showPassword ? "text" : "password"} 
                          placeholder="Enter your password"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <Button onClick={handleLogin} className="w-full">
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <div className="text-center">
                      <Button variant="link" className="text-sm">
                        Forgot your password?
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="register" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input id="registerEmail" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input id="registerPassword" type="password" placeholder="Create a password" />
                    </div>
                    <Button onClick={handleRegister} className="w-full">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Dashboard Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {studentData.name}!</h1>
              <p className="text-blue-100">Track your progress and manage your driving lessons</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-2xl font-bold">{studentData.progress}%</div>
              <div className="text-blue-100 text-sm">Course Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                      Next Lesson
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{studentData.nextLesson}</div>
                    <p className="text-gray-600 text-sm">with {studentData.instructor}</p>
                    <Button size="sm" className="mt-3">View Details</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                      Lessons Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {studentData.lessonsCompleted}/{studentData.totalLessons}
                    </div>
                    <Progress value={studentData.progress} className="mb-2" />
                    <p className="text-gray-600 text-sm">{studentData.progress}% complete</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Award className="mr-2 h-5 w-5 text-purple-600" />
                      Test Date
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{studentData.testDate}</div>
                    <p className="text-gray-600 text-sm">Practical driving test</p>
                    <Button size="sm" variant="outline" className="mt-3">Reschedule</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Completed: City Driving Lesson</p>
                        <p className="text-sm text-gray-600">March 8, 2024 with David Thompson</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Upcoming: Motorway Practice</p>
                        <p className="text-sm text-gray-600">March 12, 2024 at 10:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">Reminder: Theory test preparation</p>
                        <p className="text-sm text-gray-600">Don't forget to practice hazard perception</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Lessons Tab */}
            <TabsContent value="lessons" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Lessons</CardTitle>
                    <CardDescription>Your scheduled driving lessons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingLessons.map((lesson, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{lesson.date}</p>
                              <p className="text-sm text-gray-600">{lesson.time}</p>
                            </div>
                            <Badge variant={lesson.status === "confirmed" ? "default" : "secondary"}>
                              {lesson.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-1">{lesson.type}</p>
                          <p className="text-xs text-gray-500">with {lesson.instructor}</p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm" variant="outline">Cancel</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Lessons</CardTitle>
                    <CardDescription>Your lesson history and feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {completedLessons.map((lesson, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{lesson.date}</p>
                              <p className="text-sm text-gray-600">{lesson.time}</p>
                            </div>
                            <div className="flex">
                              {[...Array(lesson.rating)].map((_, i) => (
                                <CheckCircle key={i} className="h-4 w-4 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">{lesson.type}</p>
                          <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">{lesson.notes}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Overall Progress</span>
                          <span className="text-sm">{studentData.progress}%</span>
                        </div>
                        <Progress value={studentData.progress} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Vehicle Controls</span>
                          <span className="text-sm">90%</span>
                        </div>
                        <Progress value={90} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Road Awareness</span>
                          <span className="text-sm">85%</span>
                        </div>
                        <Progress value={85} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Maneuvers</span>
                          <span className="text-sm">70%</span>
                        </div>
                        <Progress value={70} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Theory Knowledge</span>
                          <span className="text-sm">95%</span>
                        </div>
                        <Progress value={95} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-yellow-500" />
                        <div>
                          <p className="font-medium">First Lesson Complete</p>
                          <p className="text-xs text-gray-600">Completed your first driving lesson</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-blue-500" />
                        <div>
                          <p className="font-medium">Theory Test Ready</p>
                          <p className="text-xs text-gray-600">Scored 95% on practice tests</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-green-500" />
                        <div>
                          <p className="font-medium">Parking Master</p>
                          <p className="text-xs text-gray-600">Mastered all parking techniques</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-purple-500" />
                        <div>
                          <p className="font-medium">Half Way There</p>
                          <p className="text-xs text-gray-600">Completed 50% of your course</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Materials Tab */}
            <TabsContent value="materials" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Study Materials</CardTitle>
                    <CardDescription>Download your course materials and guides</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Highway Code Guide</p>
                          <p className="text-sm text-gray-600">Latest version - PDF</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Hazard Perception Practice</p>
                          <p className="text-sm text-gray-600">Interactive tests</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Access
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Mock Theory Tests</p>
                          <p className="text-sm text-gray-600">50 practice questions</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Start Test
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Driving Test Routes</p>
                          <p className="text-sm text-gray-600">Local test center routes</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Certificates</CardTitle>
                    <CardDescription>Your completed certificates and awards</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded bg-green-50">
                        <div>
                          <p className="font-medium">Theory Test Certificate</p>
                          <p className="text-sm text-gray-600">Passed - March 5, 2024</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded opacity-50">
                        <div>
                          <p className="font-medium">Practical Test Certificate</p>
                          <p className="text-sm text-gray-600">Pending - March 15, 2024</p>
                        </div>
                        <Button size="sm" variant="outline" disabled>
                          <Download className="h-4 w-4 mr-1" />
                          Pending
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="profileName">Full Name</Label>
                      <Input id="profileName" value={studentData.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profileEmail">Email</Label>
                      <Input id="profileEmail" value={studentData.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profilePhone">Phone</Label>
                      <Input id="profilePhone" value={studentData.phone} />
                    </div>
                    <Button className="w-full">Update Information</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5" />
                      Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Course Information</h4>
                      <p className="text-sm text-gray-600">Course: {studentData.course}</p>
                      <p className="text-sm text-gray-600">Instructor: {studentData.instructor}</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">Change Password</Button>
                      <Button variant="outline" className="w-full">Notification Settings</Button>
                      <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                        Delete Account
                      </Button>
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

export default StudentPortal;
