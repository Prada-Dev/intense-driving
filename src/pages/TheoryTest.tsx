import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, Star, Calendar, ArrowLeft, Phone, Mail, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import theoryTestImage from "@/assets/theory-test.jpg";

const TheoryTest = () => {
  const courseFeatures = [
    "Latest Highway Code coverage",
    "Interactive hazard perception training", 
    "Multiple mock theory tests",
    "Personalized weak area focus",
    "Online practice access",
    "Test booking guidance"
  ];

  const testSections = [
    {
      title: "Multiple Choice Questions",
      description: "50 questions covering road signs, rules, and safety",
      passMark: "43 out of 50",
      timeLimit: "57 minutes"
    },
    {
      title: "Hazard Perception",
      description: "14 video clips testing your hazard awareness", 
      passMark: "44 out of 75",
      timeLimit: "20 minutes"
    }
  ];

  const studyTopics = [
    "Road signs and markings",
    "Rules of the road",
    "Traffic laws and penalties",
    "Vehicle safety checks",
    "Vulnerable road users",
    "Attitude and behaviour",
    "Safety margins and hazards",
    "Road and weather conditions"
  ];

  const mockTestStats = [
    { label: "Practice Questions", value: "1000+" },
    { label: "Mock Tests", value: "50+" },
    { label: "Video Clips", value: "200+" },
    { label: "Success Rate", value: "96%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/courses" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-500 text-white mb-4">
                <Brain className="mr-1 h-3 w-3" />
                Essential Preparation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Theory Test Preparation</h1>
              <p className="text-xl text-green-100 mb-6">
                Comprehensive theory test preparation with expert guidance, mock tests, and proven study materials to ensure you pass first time.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-2xl font-bold">£20</span>
                  <span className="text-green-200 text-sm"> per session</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Clock className="h-5 w-5 inline mr-2" />
                  <span>2 hours</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Theory Prep
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={theoryTestImage} 
                alt="Theory test preparation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Understanding the Theory Test</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testSections.map((section, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{section.title}</CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Pass Mark</div>
                      <div className="font-semibold text-green-600">{section.passMark}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Time Limit</div>
                      <div className="font-semibold text-blue-600">{section.timeLimit}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Topics */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Study</h2>
              <p className="text-gray-700 mb-8">
                Our comprehensive theory test preparation covers all aspects of the official DVSA syllabus. 
                We use the latest materials and proven teaching methods to ensure you're fully prepared.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {studyTopics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Study Materials Included</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Official Highway Code (latest edition)</li>
                  <li>• Online theory test practice account</li>
                  <li>• Hazard perception training videos</li>
                  <li>• Personalized study plan</li>
                  <li>• Progress tracking and weak area identification</li>
                  <li>• Test booking assistance and guidance</li>
                </ul>
              </div>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">Preparation Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {mockTestStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-center">Course Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">£20</div>
                    <div className="text-gray-500">per 2-hour session</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Package Options:</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="font-medium">Single Session</div>
                        <div className="text-xl font-bold text-green-600">£20</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded border border-green-200">
                        <div className="font-medium">3-Session Package</div>
                        <div className="text-xl font-bold text-green-600">£50</div>
                        <div className="text-sm text-green-600">Save £10</div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Start Theory Prep
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Free Study Guide
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

export default TheoryTest;