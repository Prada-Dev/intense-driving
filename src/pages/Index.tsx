import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Shield, Phone, Mail, MapPin, Calendar, CheckCircle, Award, ArrowRight, BookOpen, GraduationCap, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { PricingCard } from "@/components/PricingCard";
import drivingCarImage from "@/assets/driving-car.jpg";
import successStoryImage from "@/assets/success-story.jpg";
const Index = () => {
  const courses = [{
    title: "Beginner Course",
    description: "Perfect for first-time drivers. Learn all the basics with our experienced instructors.",
    price: "£30/hour",
    duration: "2 hours",
    level: "Beginner",
    features: ["Basic controls", "Road awareness", "Highway code", "Parking skills"]
  }, {
    title: "Intensive Course",
    description: "Fast-track your learning with our intensive driving program.",
    price: "£250/week",
    duration: "5 days",
    level: "All levels",
    features: ["Daily 2-hour lessons", "Theory test prep", "Mock driving test", "Fast track to test"]
  }, {
    title: "Refresher Course",
    description: "Get back on the road with confidence after a break from driving.",
    price: "£35/hour",
    duration: "Flexible",
    level: "Intermediate",
    features: ["Confidence building", "Updated road rules", "Practical assessment", "Flexible scheduling"]
  }];
  const testimonials = [{
    name: "Sarah Johnson",
    text: "Absolutely brilliant! Passed first time thanks to the excellent instruction. The instructors are patient and professional.",
    rating: 5,
    course: "Intensive Course"
  }, {
    name: "Mike Chen",
    text: "Great value for money. The booking system is easy to use and the lessons are well-structured.",
    rating: 5,
    course: "Beginner Course"
  }, {
    name: "Emma Williams",
    text: "After not driving for 5 years, I needed a refresher. Got my confidence back quickly!",
    rating: 5,
    course: "Refresher Course"
  }];
  const stats = [{
    icon: Users,
    value: "2000+",
    label: "Students Taught"
  }, {
    icon: Award,
    value: "95%",
    label: "Pass Rate"
  }, {
    icon: Clock,
    value: "10+",
    label: "Years Experience"
  }, {
    icon: Shield,
    value: "100%",
    label: "Safety Record"
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0tMTAgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxyy43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm animate-pulse-slow">
                  ⭐ #1 Driving School in the UK
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Book Today & Drive
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient-move bg-300%">
                    Tomorrow
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                  Expert DVSA-approved instructors. Flexible bookings. 
                  <span className="font-semibold"> 95% first-time pass rate.</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Manual & Automatic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Intensive Courses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pass Plus Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate-float">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Assessment
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-4 text-lg transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0800 123 4567
                </Button>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="animate-slide-in-right">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              As Simple as 1, 2, 3!
            </h2>
            <p className="text-xl text-gray-600">Book online in under 60 seconds</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">ENTER POSTCODE</h3>
              <p className="text-gray-600">Tell us where you live so we can find local instructors</p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">CHOOSE INSTRUCTOR</h3>
              <p className="text-gray-600">Browse profiles and pick your perfect driving instructor</p>
            </div>
            
            <div className="text-center space-y-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">START LEARNING</h3>
              <p className="text-gray-600">Book your first lesson and start your journey</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={parseInt(stat.value.replace(/[^\d]/g, ''))} suffix={stat.value.replace(/[\d]/g, '')} />
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              💰 Flexible Booking
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Your Licence Quickly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our flexible pricing options. Compare packages, 
              read real reviews and book instantly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <PricingCard
              title="First Lesson"
              price="£25"
              originalPrice="£35"
              features={[
                "2-hour assessment lesson",
                "Learn in dual-control car", 
                "Expert DVSA instructor",
                "Personal learning plan",
                "Progress tracking app"
              ]}
              className="animate-scale-in"
            />
            
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <PricingCard
                title="Block Booking"
                price="£28"
                features={[
                  "10 hours minimum",
                  "Save £7 per hour",
                  "Flexible scheduling",
                  "Theory test support",
                  "Mock test included"
                ]}
                isPopular={true}
              />
            </div>
            
            <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
              <PricingCard
                title="Intensive Course"
                price="£799"
                features={[
                  "30-hour course",
                  "2 weeks to test ready",
                  "Theory & practical test",
                  "Fast-track booking",
                  "Test day support"
                ]}
              />
            </div>
          </div>

          <div className="text-center animate-fade-in-up">
            <p className="text-gray-600 mb-6">
              ✅ All prices include VAT • ✅ No hidden fees • ✅ Cancel anytime
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Course Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              This Could Info Who We
              <span className="block text-primary">Are And What We Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional driving instruction that gets results. Join thousands of students who achieved their driving dreams with us.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
                <img 
                  src={drivingCarImage} 
                  alt="Professional driving instruction" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🎓 Expert Instruction
                </Badge>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Learn From The Best DVSA Approved Instructors
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our expert instructors combine years of experience with modern teaching methods. 
                  Every lesson is tailored to your learning style, ensuring you build confidence 
                  and skills that last a lifetime.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Qualified Experts</h4>
                  <p className="text-gray-600 text-sm">DVSA approved with 10+ years experience</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Personalized</h4>
                  <p className="text-gray-600 text-sm">Lessons adapted to your learning pace</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Safe Learning</h4>
                  <p className="text-gray-600 text-sm">Dual-controlled vehicles for safety</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Fast Results</h4>
                  <p className="text-gray-600 text-sm">95% first-time pass rate</p>
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  ⭐ Success Stories
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Get A Car & We'll Help To Ship You
                  <span className="block text-primary">To Your Driving Licence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join thousands of successful students who achieved their driving dreams. 
                  Our proven method gets results fast.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-600">First Time Pass Rate</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <AnimatedCounter end={2000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Students Passed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    <AnimatedCounter end={24} suffix=" hrs" />
                  </div>
                  <div className="text-sm text-gray-600">Average to Test</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                  <div className="text-3xl font-bold text-pink-600 mb-2">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                <Link to="/courses">
                  View Our Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-xl"></div>
                <img 
                  src={successStoryImage} 
                  alt="Student success stories" 
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4">
              ⭐ Recent Passes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our Students Say
            </h2>
            <p className="text-xl text-white/90">Real success stories from real students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:transform hover:scale-105 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                      <Badge variant="outline" className="text-xs mt-1 border-primary text-primary">
                        {testimonial.course}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0tMTAgMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxyy43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc=')] opacity-20"></div>
        
        <div className="relative z-10 container mx-auto max-w-5xl px-4 text-center text-white">
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              🚗 Get Your Licence Quicker With Book Instructor
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Learn Safely And
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Get Your Licence Quicker
              </span>
              With Book Instructor
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Start your driving journey today with expert instruction, flexible booking, 
              and a proven track record of success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold px-10 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Assessment
              </Button>
              
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No upfront payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free cancellation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;