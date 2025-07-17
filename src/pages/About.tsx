import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Clock, Users, Shield, Phone, CheckCircle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
const About = () => {
  const instructors = [{
    name: "David Thompson",
    role: "Chief Driving Instructor",
    experience: "15 years",
    specialties: ["Intensive Courses", "Nervous Drivers", "Advanced Techniques"],
    certifications: ["ADI Grade A", "Fleet Training Certified", "Pass Plus Instructor"],
    bio: "David has been helping students achieve their driving goals for over 15 years. His patient approach and expertise in intensive courses make him perfect for students who want to learn quickly and efficiently.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Sarah Mitchell",
    role: "Senior Driving Instructor",
    experience: "12 years",
    specialties: ["Beginner Drivers", "Theory Test Prep", "Female Students"],
    certifications: ["ADI Grade A", "Theory Test Trainer", "Defensive Driving Instructor"],
    bio: "Sarah specializes in working with beginner drivers and has a particular talent for making nervous students feel comfortable and confident behind the wheel.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b665?w=150&h=150&fit=crop&crop=face"
  }, {
    name: "Michael Roberts",
    role: "Driving Instructor",
    experience: "8 years",
    specialties: ["Pass Plus", "Motorway Training", "Refresher Courses"],
    certifications: ["ADI Grade A", "Pass Plus Instructor", "Commercial Vehicle Training"],
    bio: "Michael brings energy and enthusiasm to every lesson. His expertise in motorway training and Pass Plus courses helps students become confident, advanced drivers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }];
  const values = [{
    icon: Shield,
    title: "Safety First",
    description: "Safety is our top priority. We ensure every student learns defensive driving techniques and develops hazard awareness skills."
  }, {
    icon: Users,
    title: "Student-Centered",
    description: "Every student is unique. We tailor our teaching methods to match individual learning styles and pace."
  }, {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our teaching standards to our customer service."
  }, {
    icon: CheckCircle,
    title: "Results-Driven",
    description: "Our 95% first-time pass rate speaks to our commitment to getting you road-ready efficiently."
  }];
  const achievements = ["Over 2000 students taught successfully", "95% first-time pass rate", "10+ years serving the Manchester area", "100% safety record with no incidents", "Approved by DVSA", "Multiple instructor awards"];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Intense Driving UK</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Manchester's premier driving school with over a decade of experience in creating confident, safe drivers
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Founded in 2014, Intense Driving UK began with a simple mission: to provide high-quality, 
                professional driving instruction that gets results. What started as a small driving school 
                with just one instructor has grown into Manchester's most trusted driving education provider.
              </p>
              <p className="mb-6">
                Our success comes from our commitment to student-centered learning. We understand that every 
                student is different – some learn quickly with intensive courses, others prefer a more gradual 
                approach. That's why we offer a variety of course options and match each student with the 
                instructor who best fits their learning style.
              </p>
              <p>
                Today, we're proud to have helped over 2000 students achieve their driving goals, with a 95% 
                first-time pass rate that speaks to the quality of our instruction. But beyond the numbers, 
                what we're most proud of is the confidence and safety skills we instill in every driver who 
                learns with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we approach driver education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Instructors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of qualified, experienced instructors are passionate about helping you become a safe, confident driver
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{instructor.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {instructor.role}
                  </CardDescription>
                  <div className="flex items-center justify-center mt-2">
                    <Clock className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{instructor.experience} experience</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{instructor.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.map((specialty, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>)}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Certifications:</h4>
                    <ul className="space-y-1">
                      {instructor.certifications.map((cert, idx) => <li key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                          {cert}
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600">We're proud of what we've accomplished, but we're even more excited about what's ahead</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn with the Best?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the thousands of students who've trusted us with their driving education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3">
              Book Your First Lesson
            </Button>
            <Button size="lg" variant="outline" className="border-white px-8 py-3 text-slate-50 bg-blue-700 hover:bg-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;