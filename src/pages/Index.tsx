
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Shield, Phone, Mail, MapPin, Calendar, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  const courses = [
    {
      title: "Beginner Course",
      description: "Perfect for first-time drivers. Learn all the basics with our experienced instructors.",
      price: "£30/hour",
      duration: "2 hours",
      level: "Beginner",
      features: ["Basic controls", "Road awareness", "Highway code", "Parking skills"]
    },
    {
      title: "Intensive Course",
      description: "Fast-track your learning with our intensive driving program.",
      price: "£250/week",
      duration: "5 days",
      level: "All levels",
      features: ["Daily 2-hour lessons", "Theory test prep", "Mock driving test", "Fast track to test"]
    },
    {
      title: "Refresher Course",
      description: "Get back on the road with confidence after a break from driving.",
      price: "£35/hour",
      duration: "Flexible",
      level: "Intermediate",
      features: ["Confidence building", "Updated road rules", "Practical assessment", "Flexible scheduling"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Absolutely brilliant! Passed first time thanks to the excellent instruction. The instructors are patient and professional.",
      rating: 5,
      course: "Intensive Course"
    },
    {
      name: "Mike Chen",
      text: "Great value for money. The booking system is easy to use and the lessons are well-structured.",
      rating: 5,
      course: "Beginner Course"
    },
    {
      name: "Emma Williams",
      text: "After not driving for 5 years, I needed a refresher. Got my confidence back quickly!",
      rating: 5,
      course: "Refresher Course"
    }
  ];

  const stats = [
    { icon: Users, value: "2000+", label: "Students Taught" },
    { icon: Award, value: "95%", label: "Pass Rate" },
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Shield, value: "100%", label: "Safety Record" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Learn to Drive with
            <span className="block text-yellow-400">Intense Driving UK</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Professional driving lessons with experienced instructors. Get on the road safely and confidently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your First Lesson
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Driving Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional driving courses designed to get you road-ready
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                      <div className="text-sm text-gray-500">{course.duration}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book This Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.course}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Driving Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied students who learned to drive with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Book Your Lesson Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Link to="/contact" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
