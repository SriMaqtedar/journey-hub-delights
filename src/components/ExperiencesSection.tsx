
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Camera, Compass, Users } from "lucide-react";

const experiences = [
  {
    icon: Mountain,
    title: "Adventure Hiking",
    description: "Conquer challenging trails and reach breathtaking summits with expert guides",
    color: "text-green-600"
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning landscapes with professional photography workshops",
    color: "text-blue-600"
  },
  {
    icon: Compass,
    title: "Cultural Exploration",
    description: "Immerse yourself in local traditions and discover hidden cultural gems",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "Group Adventures",
    description: "Join like-minded travelers for unforgettable shared experiences",
    color: "text-orange-600"
  }
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More than just destinations - we create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-gray-50 hover:bg-white">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <experience.icon className={`h-8 w-8 ${experience.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                <p className="text-gray-600 leading-relaxed">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h3>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of travelers who have discovered the world with us
          </p>
          <button className="bg-white text-orange-500 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-colors">
            Start Planning Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
