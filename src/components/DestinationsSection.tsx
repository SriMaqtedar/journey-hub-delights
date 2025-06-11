
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Milford Sound",
    region: "Fiordland, South Island",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    price: "From $189",
    description: "Dramatic fiords with towering waterfalls and pristine wilderness"
  },
  {
    id: 2,
    name: "Queenstown",
    region: "Otago, South Island",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    price: "From $129",
    description: "Adventure capital with stunning alpine lakes and mountains"
  },
  {
    id: 3,
    name: "Bay of Islands",
    region: "Northland, North Island",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    price: "From $95",
    description: "Pristine waters, historic sites, and abundant marine life"
  },
  {
    id: 4,
    name: "Rotorua",
    region: "Bay of Plenty, North Island",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    price: "From $75",
    description: "Geothermal wonders and rich Māori cultural experiences"
  }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Iconic New Zealand Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From the majestic Southern Alps to pristine beaches, explore the diverse beauty of Aotearoa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-500">{destination.region}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-orange-500">{destination.price}</span>
                  <button className="text-orange-500 hover:text-orange-600 font-medium">
                    Explore →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
