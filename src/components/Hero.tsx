
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            Wanderlust
          </div>
          <div className="hidden md:flex items-center space-x-8 text-white">
            <a href="#destinations" className="hover:text-orange-300 transition-colors">Destinations</a>
            <a href="#experiences" className="hover:text-orange-300 transition-colors">Experiences</a>
            <a href="#about" className="hover:text-orange-300 transition-colors">About</a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Book Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover the
          <span className="text-orange-400 block">World's Beauty</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Embark on unforgettable journeys to breathtaking destinations around the globe
        </p>
        
        {/* Search Bar */}
        <div className="bg-white rounded-full p-2 flex items-center max-w-md mx-auto mb-8 shadow-lg">
          <MapPin className="h-5 w-5 text-gray-400 ml-4" />
          <input 
            type="text" 
            placeholder="Where do you want to go?"
            className="flex-1 px-4 py-3 rounded-full focus:outline-none"
          />
          <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg">
            Explore Destinations
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg">
            Plan Your Trip
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
