import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, Calendar, ArrowLeft, Phone, Mail, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import successStoryImage from "@/assets/success-story.jpg";

const IntensiveCourse = () => {
  const courseFeatures = [
    "Daily 2-hour intensive lessons",
    "Comprehensive theory test preparation",
    "Mock driving test sessions",
    "Fast-track practical test booking",
    "One-on-one personalized instruction",
    "Weekend availability"
  ];

  const weekSchedule = [
    {
      day: "Day 1",
      title: "Foundation & Controls",
      content: "Vehicle familiarization, basic controls, and initial road experience on quiet routes"
    },
    {
      day: "Day 2",
      title: "Road Skills Development", 
      content: "Traffic awareness, roundabouts, dual carriageways, and building confidence"
    },
    {
      day: "Day 3",
      title: "Advanced Maneuvers",
      content: "Parking techniques, reversing maneuvers, and complex junction navigation"
    },
    {
      day: "Day 4",
      title: "Independent Driving",
      content: "Following sat-nav instructions, independent decision making, and test route practice"
    },
    {
      day: "Day 5",
      title: "Test Preparation",
      content: "Full mock test, final skill refinement, and booking your practical test"
    }
  ];

  const benefits = [
    {
      title: "Fast Results",
      description: "Get road-ready in just one week with our intensive approach"
    },
    {
      title: "Focused Learning",
      description: "Daily lessons maintain momentum and accelerate skill development"
    },
    {
      title: "Test Fast-Track",
      description: "We help you book your test quickly to capitalize on your learning"
    },
    {
      title: "Cost Effective",
      description: "Complete your training faster, reducing overall learning costs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/courses" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-yellow-900 mb-4">
                <Zap className="mr-1 h-3 w-3" />
                Most Popular Course
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Intensive Driving Course</h1>
              <p className="text-xl text-orange-100 mb-6">
                Fast-track your driving journey! Get road-ready in just 5 days with our proven intensive learning program.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-2xl font-bold">£250</span>
                  <span className="text-orange-200 text-sm"> total course</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Clock className="h-5 w-5 inline mr-2" />
                  <span>5 days (10 hours)</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Intensive Course
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-800">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={successStoryImage} 
                alt="Intensive course success"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Intensive Learning?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Week Schedule */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5-Day Learning Schedule</h2>
              <p className="text-gray-700 mb-8">
                Our intensive course is carefully structured to maximize learning in minimum time. 
                Each day builds upon the previous, ensuring rapid but solid skill development.
              </p>

              <div className="space-y-6">
                {weekSchedule.map((day, index) => (
                  <Card key={index} className="border-l-4 border-l-orange-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          {day.day}
                        </Badge>
                        <CardTitle className="text-lg">{day.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{day.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">Course Guarantee</h3>
                <p className="text-orange-700 text-sm">
                  We're so confident in our intensive course that if you don't feel test-ready after 5 days, 
                  we'll provide additional lessons at no extra cost until you do.
                </p>
              </div>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">Course Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">£250</div>
                    <div className="text-gray-500">complete 5-day course</div>
                    <div className="text-sm text-green-600 font-medium">Save £50 vs individual lessons</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 10 hours of intensive instruction</li>
                      <li>• Theory test materials</li>
                      <li>• Mock driving tests</li>
                      <li>• Test booking assistance</li>
                      <li>• Progress tracking</li>
                      <li>• Course completion certificate</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Ideal For:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Quick learners</li>
                      <li>• Holiday periods</li>
                      <li>• Career requirements</li>
                      <li>• Limited availability</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Intensive Course
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Check Availability
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntensiveCourse;