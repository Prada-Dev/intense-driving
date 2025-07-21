import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  EyeOff,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const StudentPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Registration form state
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Student data state
  interface StudentData {
    name: string;
    email: string;
    phone: string;
    course: string;
    instructor: string;
    progress: number;
    lessonsCompleted: number;
    totalLessons: number;
    nextLesson: string;
    testDate: string;
    lastLessonDate?: string;
    nextLessonDate?: string;
  }
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  const upcomingLessons = [
    {
      date: "Tomorrow",
      time: "2:00 PM - 4:00 PM",
      instructor: "David Thompson",
      type: "Practical Lesson",
      status: "confirmed",
    },
    {
      date: "March 12",
      time: "10:00 AM - 12:00 PM",
      instructor: "David Thompson",
      type: "Motorway Practice",
      status: "confirmed",
    },
    {
      date: "March 14",
      time: "3:00 PM - 5:00 PM",
      instructor: "David Thompson",
      type: "Mock Test",
      status: "pending",
    },
  ];

  const completedLessons = [
    {
      date: "March 8",
      time: "2:00 PM - 4:00 PM",
      instructor: "David Thompson",
      type: "City Driving",
      rating: 5,
      notes: "Excellent progress with roundabouts and traffic management",
    },
    {
      date: "March 6",
      time: "10:00 AM - 12:00 PM",
      instructor: "David Thompson",
      type: "Parking Practice",
      rating: 4,
      notes:
        "Good improvement in parallel parking, need to work on bay parking",
    },
    {
      date: "March 4",
      time: "3:00 PM - 5:00 PM",
      instructor: "David Thompson",
      type: "Theory Review",
      rating: 5,
      notes: "Ready for theory test, excellent understanding of road rules",
    },
  ];

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    setIsLoggedIn(true);
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in to your student portal.",
    });
    // Fetch user details from Supabase
    const user = data?.user;
    if (user) {
      // Use user.user_metadata if available, else fallback to email
      setStudentData({
        name:
          `${user.user_metadata?.first_name || ""} ${
            user.user_metadata?.last_name || ""
          }`.trim() || user.email,
        email: user.email,
        phone: user.user_metadata?.phone || "",
        course: user.user_metadata?.course || "",
        instructor: user.user_metadata?.instructor || "",
        progress: user.user_metadata?.progress || 0,
        lessonsCompleted: user.user_metadata?.lessonsCompleted || 0,
        totalLessons: user.user_metadata?.totalLessons || 0,
        nextLesson: user.user_metadata?.nextLesson || "",
        testDate: user.user_metadata?.testDate || "",
      });
    }
  };

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email: registerEmail,
      password: registerPassword,
      options: {
        data: {
          first_name: registerFirstName,
          last_name: registerLastName,
          phone: registerPhone,
        },
      },
    });
    if (error) {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registration Successful!",
        description: "Please check your email to verify your account.",
      });
    }
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
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="loginEmail">Email</Label>
                      <Input
                        id="loginEmail"
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="loginPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="loginPassword"
                          type={showPassword ? "text" : "password"}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button onClick={handleLogin} className="w-full">
                      Log In
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      Don't have an account?{" "}
                      <Button
                        variant="link"
                        onClick={() => setActiveTab("register")}
                      >
                        Register now
                      </Button>
                    </p>
                  </TabsContent>
                  <TabsContent value="register" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="registerFirstName">First Name</Label>
                      <Input
                        id="registerFirstName"
                        value={registerFirstName}
                        onChange={(e) => setRegisterFirstName(e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerLastName">Last Name</Label>
                      <Input
                        id="registerLastName"
                        value={registerLastName}
                        onChange={(e) => setRegisterLastName(e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input
                        id="registerEmail"
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPhone">Phone</Label>
                      <Input
                        id="registerPhone"
                        value={registerPhone}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <div className="relative">
                        <Input
                          id="registerPassword"
                          type={showPassword ? "text" : "password"}
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          placeholder="Create a password"
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 flex items-center pr-3"
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>
                    <Button onClick={handleRegister} className="w-full">
                      Register
                    </Button>
                    <p className="text-center text-sm text-gray-500">
                      Already have an account?{" "}
                      <Button
                        variant="link"
                        onClick={() => setActiveTab("login")}
                      >
                        Log in here
                      </Button>
                    </p>
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
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {studentData?.name || "Student"}!
              </h1>
              <p className="text-blue-100">
                Track your progress and manage your driving lessons
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-2xl font-bold">
                {studentData?.progress || 0}%
              </div>
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
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {studentData?.nextLesson || "No lesson scheduled"}
                    </div>
                    <p className="text-gray-600 text-sm">
                      with {studentData?.instructor || "Instructor"}
                    </p>
                    <Button size="sm" className="mt-3">
                      View Details
                    </Button>
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
                      {studentData?.lessonsCompleted || 0}/
                      {studentData?.totalLessons || 0}
                    </div>
                    <Progress
                      value={studentData?.progress || 0}
                      className="mb-2"
                    />
                    <p className="text-gray-600 text-sm">
                      {studentData?.progress || 0}% complete
                    </p>
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
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {studentData?.testDate || "Not scheduled"}
                    </div>
                    <p className="text-gray-600 text-sm">
                      Practical driving test
                    </p>
                    <Button size="sm" variant="outline" className="mt-3">
                      Reschedule
                    </Button>
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
                        <p className="font-medium">
                          Completed: City Driving Lesson
                        </p>
                        <p className="text-sm text-gray-600">
                          {/* Example: Use studentData for dynamic info if available */}
                          {studentData?.lastLessonDate || "March 8, 2024"} with{" "}
                          {studentData?.instructor || "David Thompson"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">
                          Upcoming: Motorway Practice
                        </p>
                        <p className="text-sm text-gray-600">
                          {/* Example: Use studentData for dynamic info if available */}
                          {studentData?.nextLessonDate ||
                            "March 12, 2024 at 10:00 AM"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="font-medium">
                          Reminder: Theory test preparation
                        </p>
                        <p className="text-sm text-gray-600">
                          Don't forget to practice hazard perception
                        </p>
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
                    <CardDescription>
                      Your scheduled driving lessons
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingLessons.map((lesson, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{lesson.date}</p>
                              <p className="text-sm text-gray-600">
                                {lesson.time}
                              </p>
                            </div>
                            <Badge
                              variant={
                                lesson.status === "confirmed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {lesson.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-1">
                            {lesson.type}
                          </p>
                          <p className="text-xs text-gray-500">
                            with {lesson.instructor}
                          </p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="outline">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Completed Lessons</CardTitle>
                    <CardDescription>
                      Your lesson history and feedback
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {completedLessons.map((lesson, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium">{lesson.date}</p>
                              <p className="text-sm text-gray-600">
                                {lesson.time}
                              </p>
                            </div>
                            <div className="flex">
                              {[...Array(lesson.rating)].map((_, i) => (
                                <CheckCircle
                                  key={i}
                                  className="h-4 w-4 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-2">
                            {lesson.type}
                          </p>
                          <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                            {lesson.notes}
                          </p>
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
                          <span className="text-sm font-medium">
                            Overall Progress
                          </span>
                          <span className="text-sm">
                            {studentData.progress}%
                          </span>
                        </div>
                        <Progress value={studentData.progress} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Vehicle Controls
                          </span>
                          <span className="text-sm">90%</span>
                        </div>
                        <Progress value={90} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            Road Awareness
                          </span>
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
                          <span className="text-sm font-medium">
                            Theory Knowledge
                          </span>
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
                          <p className="text-xs text-gray-600">
                            Completed your first driving lesson
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-blue-500" />
                        <div>
                          <p className="font-medium">Theory Test Ready</p>
                          <p className="text-xs text-gray-600">
                            Scored 95% on practice tests
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-green-500" />
                        <div>
                          <p className="font-medium">Parking Master</p>
                          <p className="text-xs text-gray-600">
                            Mastered all parking techniques
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-6 w-6 text-purple-500" />
                        <div>
                          <p className="font-medium">Half Way There</p>
                          <p className="text-xs text-gray-600">
                            Completed 50% of your course
                          </p>
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
                    <CardDescription>
                      Download your course materials and guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Highway Code Guide</p>
                          <p className="text-sm text-gray-600">
                            Latest version - PDF
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">
                            Hazard Perception Practice
                          </p>
                          <p className="text-sm text-gray-600">
                            Interactive tests
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Access
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Mock Theory Tests</p>
                          <p className="text-sm text-gray-600">
                            50 practice questions
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Start Test
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium">Driving Test Routes</p>
                          <p className="text-sm text-gray-600">
                            Local test center routes
                          </p>
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
                    <CardDescription>
                      Your completed certificates and awards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded bg-green-50">
                        <div>
                          <p className="font-medium">Theory Test Certificate</p>
                          <p className="text-sm text-gray-600">
                            Passed - March 5, 2024
                          </p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded opacity-50">
                        <div>
                          <p className="font-medium">
                            Practical Test Certificate
                          </p>
                          <p className="text-sm text-gray-600">
                            Pending - March 15, 2024
                          </p>
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
                      <p className="text-sm text-gray-600">
                        Course: {studentData.course}
                      </p>
                      <p className="text-sm text-gray-600">
                        Instructor: {studentData.instructor}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full">
                        Notification Settings
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-red-600 hover:text-red-700"
                      >
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
