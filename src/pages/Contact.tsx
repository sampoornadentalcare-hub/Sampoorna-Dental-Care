import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Contact Us</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Have a question or want to book an appointment? Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Cards */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="w-7 h-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-500 mb-4">Call us for appointments</p>
            <a href="tel:+919876543210" className="text-lg font-bold text-primary-600 hover:underline">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-500 mb-4">Send us your queries</p>
            <a href="mailto:info@sampoornadental.com" className="text-lg font-bold text-primary-600 hover:underline">
              info@sampoornadental.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-7 h-7 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
            <p className="text-slate-500 mb-1">Mon - Sat: 10 AM - 8 PM</p>
            <p className="text-slate-500">Sun: By Appointment Only</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="bg-white p-4 rounded-[40px] shadow-xl border border-slate-100 h-[500px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.92!3d19.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzM2LjAiTiA3MsKwNTUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[32px]"
              title="Sampoorna Dental Care Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Address Details */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
            <MapPin className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Visit Our Clinic</h3>
            <p className="text-lg text-slate-600">
              Shop no. 6, Adityaraj Royale, Tagore Nagar, Vikhroli East, Mumbai - 400083
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
