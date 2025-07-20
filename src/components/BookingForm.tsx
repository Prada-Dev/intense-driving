import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Calendar, User } from "lucide-react";

export const BookingForm = () => {
  const [formData, setFormData] = useState({
    postcode: "",
    phone: "",
    course: "",
    name: ""
  });

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-scale-in">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Find a Driving Instructor</h3>
          <p className="text-gray-600">Enter your details to get started</p>
        </div>
        
        <div className="grid gap-4">
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
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="phone"
                placeholder="Your phone number"
                className="pl-10 border-gray-200 focus:border-primary focus:ring-primary"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course" className="text-sm font-medium text-gray-700">
              Course Type
            </Label>
            <Select value={formData.course} onValueChange={(value) => setFormData({...formData, course: value})}>
              <SelectTrigger className="border-gray-200 focus:border-primary focus:ring-primary">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner Course</SelectItem>
                <SelectItem value="intensive">Intensive Course</SelectItem>
                <SelectItem value="refresher">Refresher Course</SelectItem>
                <SelectItem value="pass-plus">Pass Plus</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                placeholder="Your full name"
                className="pl-10 border-gray-200 focus:border-primary focus:ring-primary"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <Button 
            className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Find My Instructor
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};