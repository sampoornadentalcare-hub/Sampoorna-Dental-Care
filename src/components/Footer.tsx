import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Clinic Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-white">Sampoorna</span>
              <span className="text-xs font-medium text-primary-400 tracking-wider uppercase">Dental Care</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Providing comprehensive dental care with a focus on patient comfort, hygiene, and modern technology in Vikhroli, Mumbai.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
            <li><Link to="/appointment" className="hover:text-primary-400 transition-colors">Book Appointment</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary-400 transition-colors">Patient Reviews</Link></li>
            <li><Link to="/faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-display font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary-400 shrink-0" />
              <span className="text-sm">Shop no. 6, Adityaraj Royale, Tagore Nagar, Vikhroli East, Mumbai</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary-400 shrink-0" />
              <span className="text-sm">+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary-400 shrink-0" />
              <span className="text-sm">info@sampoornadental.com</span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-white font-display font-bold text-lg mb-6">Working Hours</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary-400" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Mon - Sat</span>
                <span className="text-xs text-slate-400">10:00 AM - 08:00 PM</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-600" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Sunday</span>
                <span className="text-xs text-slate-400">By Appointment Only</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Sampoorna Dental Care. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
