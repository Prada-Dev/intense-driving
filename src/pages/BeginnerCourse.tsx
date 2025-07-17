import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, Calendar, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import drivingCarImage from "@/assets/driving-car.jpg";

const BeginnerCourse = () => {
  const courseFeatures = [
    "Basic vehicle controls and safety checks",
    "Understanding traffic rules and road signs", 
    "Parking and maneuvering techniques",
    "Building confidence on quiet roads",
    "Theory test preparation included",
    "Flexible scheduling options"
  ];

  const lessonStructure = [
    {
      lesson: "Lesson 1-2",
      title: "Getting Started",
      content: "Introduction to vehicle controls, mirrors, seat adjustment, and basic safety checks"
    },
    {
      lesson: "Lesson 3-5", 
      title: "Basic Driving",
      content: "Moving off, stopping, steering control, and speed management on quiet roads"
    },
    {
      lesson: "Lesson 6-10",
      title: "Road Awareness",
      content: "Traffic signs, road markings, roundabouts, and dealing with other road users"
    },
    {
      lesson: "Lesson 11-15",
      title: "Parking & Maneuvers",
      content: "Parallel parking, bay parking, three-point turns, and reversing around corners"
    },
    {
      lesson: "Lesson 16-20",
      title: "Test Preparation",
      content: "Mock tests, independent driving, and final preparation for your driving test"
    }
  ];

  const testimonials = [
    {
      name: "Emily Watson",
      text: "The beginner course was perfect for me. My instructor was so patient and made me feel comfortable from day one.",
      rating: 5
    },
    {
      name: "James Parker", 
      text: "Excellent structured approach. I felt confident and well-prepared for my test.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/courses" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-500 text-white mb-4">Most Popular for New Drivers</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Beginner Driving Course</h1>
              <p className="text-xl text-blue-100 mb-6">
                Perfect for first-time drivers. Learn all the basics with our experienced instructors in a supportive, structured environment.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-2xl font-bold">£30</span>
                  <span className="text-blue-200 text-sm"> per hour</span>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Clock className="h-5 w-5 inline mr-2" />
                  <span>2 hours per lesson</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book This Course
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={drivingCarImage} 
                alt="Beginner driving lesson"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Our Beginner Driving Course is specifically designed for people who have never driven before 
                  or have very limited driving experience. We understand that learning to drive can feel 
                  overwhelming, which is why our approach focuses on building confidence gradually while 
                  ensuring you develop safe driving habits from the start.
                </p>
                <p>
                  Each lesson is carefully structured to build upon previous skills, ensuring steady progress 
                  without feeling rushed. Our qualified instructors use proven teaching methods and provide 
                  clear, encouraging feedback throughout your learning journey.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lesson Structure</h3>
              <div className="space-y-4">
                {lessonStructure.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{item.lesson}</Badge>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-center">Course Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">£30</div>
                    <div className="text-gray-500">per hour lesson</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Qualified instructor</li>
                      <li>• Dual-controlled vehicle</li>
                      <li>• Theory test materials</li>
                      <li>• Progress tracking</li>
                      <li>• Flexible scheduling</li>
                      <li>• Test booking assistance</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Recommended Package:</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Most students complete this course in 20-25 lessons
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-semibold text-blue-800">10 Lesson Package</div>
                      <div className="text-2xl font-bold text-blue-600">£280</div>
                      <div className="text-sm text-blue-600">Save £20</div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Your First Lesson
                  </Button>
                  
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Get More Information
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BeginnerCourse;