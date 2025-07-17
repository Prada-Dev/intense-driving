
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Courses = () => {
  const courses = [
    {
      title: "Beginner Course",
      description: "Perfect for first-time drivers. Learn all the basics with our experienced instructors.",
      price: "£30",
      duration: "2 hours per lesson",
      level: "Beginner",
      popular: false,
      features: [
        "Basic vehicle controls and safety checks",
        "Understanding traffic rules and road signs",
        "Parking and maneuvering techniques",
        "Building confidence on quiet roads",
        "Theory test preparation included",
        "Flexible scheduling options"
      ],
      includes: "Theory materials, practice tests, progress tracking"
    },
    {
      title: "Intensive Course",
      description: "Fast-track your learning with our intensive driving program. Get road-ready quickly!",
      price: "£250",
      duration: "5 days (10 hours total)",
      level: "All levels",
      popular: true,
      features: [
        "Daily 2-hour intensive lessons",
        "Comprehensive theory test preparation",
        "Mock driving test sessions",
        "Fast-track practical test booking",
        "One-on-one personalized instruction",
        "Weekend availability"
      ],
      includes: "All materials, mock tests, test booking assistance"
    },
    {
      title: "Refresher Course",
      description: "Get back on the road with confidence after a break from driving.",
      price: "£35",
      duration: "Flexible timing",
      level: "Intermediate",
      popular: false,
      features: [
        "Confidence building exercises",
        "Updated road rules and regulations",
        "Practical skills assessment",
        "Customized lesson plans",
        "Flexible scheduling to fit your needs",
        "Highway and city driving practice"
      ],
      includes: "Skills assessment, personalized plan, progress tracking"
    },
    {
      title: "Theory Test Preparation",
      description: "Comprehensive theory test preparation with mock tests and study materials.",
      price: "£20",
      duration: "2 hours",
      level: "All levels",
      popular: false,
      features: [
        "Latest Highway Code coverage",
        "Interactive hazard perception training",
        "Multiple mock theory tests",
        "Personalized weak area focus",
        "Online practice access",
        "Test booking guidance"
      ],
      includes: "Study materials, online access, mock tests"
    },
    {
      title: "Pass Plus Course",
      description: "Advanced driving course for newly qualified drivers to build extra skills and confidence.",
      price: "£45",
      duration: "6 hours (3 x 2 hour lessons)",
      level: "Advanced",
      popular: false,
      features: [
        "Motorway driving skills",
        "Night driving techniques",
        "Adverse weather conditions",
        "Dual carriageway navigation",
        "Urban and rural driving",
        "Insurance discount eligibility"
      ],
      includes: "Official Pass Plus certificate, insurance benefits guide"
    },
    {
      title: "Motorway Lessons",
      description: "Specialized motorway driving lessons for confident and safe highway driving.",
      price: "£40",
      duration: "2 hours",
      level: "Intermediate",
      popular: false,
      features: [
        "Motorway entry and exit techniques",
        "Lane discipline and positioning",
        "Safe overtaking procedures",
        "Speed management on highways",
        "Emergency procedures",
        "Weather adaptation techniques"
      ],
      includes: "Motorway-specific materials, safety guidelines"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Driving Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional driving instruction tailored to your needs and experience level
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                course.popular ? 'border-2 border-yellow-400 transform hover:scale-105' : 'border hover:border-blue-200'
              }`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-500 text-yellow-900 px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{course.price}</div>
                      <div className="text-sm text-gray-500">per lesson</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {course.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-xs text-gray-600 font-medium">Course Package Includes:</p>
                    <p className="text-sm text-gray-700">{course.includes}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className={`w-full ${
                      course.popular 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-yellow-900' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Course
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={
                        course.title === "Beginner Course" ? "/courses/beginner" :
                        course.title === "Intensive Course" ? "/courses/intensive" :
                        course.title === "Theory Test Preparation" ? "/courses/theory-test" :
                        "/courses"
                      }>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Courses?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Instructors</h3>
              <p className="text-gray-600 text-sm">All our instructors are fully qualified and regularly trained on the latest techniques.</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">High Pass Rate</h3>
              <p className="text-gray-600 text-sm">95% of our students pass their driving test on the first attempt.</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Book lessons at times that work for you, including evenings and weekends.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
