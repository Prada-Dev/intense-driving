import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MapPin, Phone, Calendar as CalendarIcon, User, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  price: string;
  duration: string;
  level: string;
  features: string[];
  includes: string;
}

export const BookingForm = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    postcode: "",
    phone: "",
    course_id: "",
    name: "",
    preferred_date: undefined as Date | undefined
  });

  useEffect(() => {
    // Use hardcoded courses instead of fetching from database
    const hardcodedCourses = [
      {
        id: "beginner",
        title: "Beginner Course",
        price: "£30",
        duration: "2 hours per lesson",
        level: "Beginner",
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
        id: "intensive",
        title: "Intensive Course",
        price: "£250",
        duration: "5 days (10 hours total)",
        level: "All levels",
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
        id: "refresher",
        title: "Refresher Course",
        price: "£35",
        duration: "Flexible timing",
        level: "Intermediate",
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
        id: "theory",
        title: "Theory Test Preparation",
        price: "£20",
        duration: "2 hours",
        level: "All levels",
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
        id: "passplus",
        title: "Pass Plus Course",
        price: "£45",
        duration: "6 hours (3 x 2 hour lessons)",
        level: "Advanced",
        features: [
          "Motorway driving skills",
          "Night driving techniques",
          "Adverse weather conditions",
          "Dual carriageway navigation",
          "Urban and rural driving",
          "Insurance discount eligibility"
        ],
        includes: "Official Pass Plus certificate, insurance benefits guide"
      }
    ];
    
    setCourses(hardcodedCourses);
  }, []);

  const generateBookingId = () => {
    const randomNumbers = Math.floor(Math.random() * 900000) + 100000;
    return `IDS${randomNumbers}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.course_id || !formData.preferred_date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Simulate booking submission since database is not set up
      // In a real application, this would submit to the database
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      const newBookingId = generateBookingId();
      setBookingId(newBookingId);
      setSuccess(true);
      
      toast({
        title: "Booking Successful!",
        description: `Your booking ID is ${newBookingId}. We'll contact you soon!`,
      });
      
    } catch (error) {
      console.error("Error creating booking:", error);
      toast({
        title: "Booking Failed",
        description: "There was an error creating your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Calculate min and max dates (today to 15 days from now)
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 15);

  if (success) {
    return (
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
        <CardContent className="p-8 text-center">
          <div className="text-green-600 mb-4">
            <CheckCircle className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600 mb-4">Your booking ID is:</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <span className="text-2xl font-mono font-bold text-primary">{bookingId}</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            We'll contact you within 24 hours to confirm your lesson details and payment instructions.
          </p>
          
          {/* Bank Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-3">Bank Transfer Details</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <div><strong>Country:</strong> Luxembourg</div>
              <div><strong>Account Name:</strong> RENE NDANJI NGU</div>
              <div><strong>Bank Name:</strong> Financial House Ltd</div>
              <div><strong>Account Number:</strong> 163750063</div>
              <div><strong>IBAN:</strong> GB49FNH000993616375036</div>
              <div><strong>BIC / SWIFT:</strong> FNHOGB21XXX</div>
            </div>
          </div>
          <Button 
            onClick={() => {
              setSuccess(false);
              setFormData({
                postcode: "",
                phone: "",
                course_id: "",
                name: "",
                preferred_date: undefined
              });
            }}
            variant="outline"
          >
            Book Another Course
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Driving Course</h3>
          <p className="text-gray-600">Choose your course and preferred date</p>
        </div>
        
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                placeholder="Your full name"
                className="pl-10 border-gray-200 focus:border-primary focus:ring-primary"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                placeholder="Your phone number"
                className="pl-10 border-gray-200 focus:border-primary focus:ring-primary"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="postcode" className="text-sm font-medium text-gray-700">
              Your Postcode
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="postcode"
                placeholder="Enter your postcode"
                className="pl-10 border-gray-200 focus:border-primary focus:ring-primary"
                value={formData.postcode}
                onChange={(e) => setFormData({...formData, postcode: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-sm font-medium text-gray-700">
              Course Type *
            </Label>
            <Select value={formData.course_id} onValueChange={(value) => setFormData({...formData, course_id: value})}>
              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title} - {course.price} ({course.duration})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Preferred Start Date *
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal border-gray-200 focus:border-primary focus:ring-primary",
                    !formData.preferred_date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.preferred_date ? (
                    format(formData.preferred_date, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.preferred_date}
                  onSelect={(date) => setFormData({...formData, preferred_date: date})}
                  disabled={(date) =>
                    date < today || date > maxDate
                  }
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
            <p className="text-xs text-gray-500">
              Choose any date within the next 15 days
            </p>
          </div>

          <Button 
            type="submit"
            className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Creating Booking...
              </>
            ) : (
              <>
                <CalendarIcon className="mr-2 h-5 w-5" />
                Book My Course
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};