import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, Calendar, ArrowRight, Phone, Mail, Award, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import studentSuccessImage from "@/assets/student-success.jpg";
import drivingFleetImage from "@/assets/driving-fleet.jpg";
import parkingLessonImage from "@/assets/parking-lesson.jpg";
const FAQ = () => {
  const faqs = [{
    question: "How many lessons will I need?",
    answer: "This varies by individual, but most students need 20-25 lessons. Our instructors will assess your progress and provide guidance on your specific needs."
  }, {
    question: "Can I use my own car for lessons?",
    answer: "We provide dual-controlled vehicles for all lessons to ensure safety. However, you're welcome to practice in your own car outside of lessons."
  }, {
    question: "What happens if I fail my test?",
    answer: "Don't worry! We provide additional training to address any areas for improvement and help you book your next test as soon as you're ready."
  }, {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options including block bookings with discounts and installment plans for intensive courses."
  }, {
    question: "Are your instructors qualified?",
    answer: "All our instructors are DVSA approved and regularly undergo additional training to maintain the highest standards."
  }, {
    question: "Can I change instructors if needed?",
    answer: "Absolutely. We want you to feel comfortable with your instructor, so we're happy to arrange a change if needed."
  }];
  const features = [{
    icon: Target,
    title: "Personalized Approach",
    description: "Every student learns differently. We adapt our teaching style to match your learning preferences and pace.",
    image: parkingLessonImage
  }, {
    icon: Award,
    title: "Proven Track Record",
    description: "With a 95% first-time pass rate, our methods are proven to get results efficiently and effectively.",
    image: studentSuccessImage
  }, {
    icon: BookOpen,
    title: "Comprehensive Training",
    description: "From basic controls to advanced techniques, we cover everything you need to become a confident driver.",
    image: drivingFleetImage
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Get answers to common questions about our driving courses and learning process
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Teaching Method?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions</h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Our team is here to help you choose the right course and answer any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-semibold px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3" asChild>
              <Link to="/contact" className="bg-pink-600 ">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default FAQ;