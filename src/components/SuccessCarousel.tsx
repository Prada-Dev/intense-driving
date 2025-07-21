import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const successImages = [
  "/lovable-uploads/67256934-d4f3-461a-b0e7-d024130f1b25.png",
  "/lovable-uploads/7e8e4927-64b5-4b53-84cb-62ef6fad3c05.png", 
  "/lovable-uploads/5db631ad-edfb-4776-ac20-f1c478651ada.png",
  "/lovable-uploads/faca1eff-0c2f-4029-bbbe-4fe1200f30f2.png",
  "/lovable-uploads/3abd0a23-545f-4008-b5d7-67c89b43923b.png",
  "/lovable-uploads/140e697f-18a7-44c8-a4a1-1bc7376ec490.png",
  "/lovable-uploads/6f0b393c-3955-454b-b446-68928eadf7c2.png",
  "/lovable-uploads/a74dfc1c-cc4b-4747-b883-2f1ea8d2a8e4.png",
  "/lovable-uploads/2b2f6131-0af8-4a9e-a59b-cf7a7901b7a1.png"
];

export const SuccessCarousel = () => {
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-green-100 text-green-800 border-green-200 mb-4">
            🎉 Our Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our Successful
            <span className="block text-primary">Students</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the joy and pride on our students' faces when they pass their driving test. 
            You could be next!
          </p>
        </div>
        
        <div className="relative animate-scale-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {successImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <img
                        src={image}
                        alt={`Successful student ${index + 1} holding their driving test pass certificate`}
                        className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <div className="text-white">
                          <div className="text-sm font-semibold">✅ Test Passed!</div>
                          <div className="text-xs opacity-90">Another successful student</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-gray-600 text-lg mb-6">
            Ready to join our success stories? Book your first lesson today!
          </p>
        </div>
      </div>
    </section>
  );
};