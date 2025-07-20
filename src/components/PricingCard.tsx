import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

export const PricingCard = ({ title, price, originalPrice, features, isPopular, className = "" }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isPopular ? 'border-primary shadow-xl' : 'border-gray-200'
    } ${className}`}>
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
          <Star className="inline-block w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}
      
      <CardHeader className={`text-center ${isPopular ? 'pt-12' : 'pt-6'}`}>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="flex items-center justify-center space-x-2">
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
          )}
          <span className="text-3xl font-bold text-primary">{price}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          className={`w-full mt-6 transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-primary hover:opacity-90 shadow-lg transform hover:scale-105' 
              : 'bg-white border-primary text-primary hover:bg-primary hover:text-white'
          }`}
          variant={isPopular ? 'default' : 'outline'}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
};