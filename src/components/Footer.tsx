
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-orange-400">Wanderlust</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your gateway to extraordinary adventures around the world. We create unforgettable travel experiences that inspire and transform.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Experiences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">123 Adventure St, Travel City</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-400 mr-3" />
                <span className="text-gray-300">hello@wanderlust.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Wanderlust. All rights reserved. Built with passion for adventure.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
