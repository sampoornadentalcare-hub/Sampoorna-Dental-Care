import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Users, 
  ShieldCheck, 
  Award,
  Calendar,
  Phone
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, fillings, and preventive care for a healthy smile.',
    icon: ShieldCheck,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth with natural-looking results.',
    icon: Award,
  },
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with modern orthodontic solutions.',
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-200/20 blur-3xl rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-primary-700" />
              Best Dentist in Vikhroli
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Your Smile, <br />
              <span className="text-primary-600">Our Priority.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Experience world-class dental care at Sampoorna Dental Care. We combine modern technology with a gentle touch to give you the smile you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/appointment"
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 flex items-center gap-2"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919876543210"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary-600 hover:text-primary-600 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 border-t border-slate-100 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">10+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">5000+</span>
                <span className="text-sm text-slate-500">Happy Patients</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                <span className="text-sm text-slate-500">Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Comprehensive Dental Care for Your Family
            </p>
            <p className="text-lg text-slate-600">
              We offer a wide range of dental services using the latest technology and techniques to ensure the best outcomes for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-600 transition-colors">
                  <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-primary-600 transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dentist Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Meet Our Expert</h2>
            <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Expert Care from Dr. Himani Singh
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Himani Singh is a highly skilled dental surgeon with a fellowship in Oral Implantology from the prestigious Government Dental College (GDC), Mumbai. She is dedicated to providing painless and effective dental treatments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
              {[
                'Fellow in Oral Implantology (GDC Mumbai)',
                'Expert in Painless Root Canal Treatments',
                'Specialist in Cosmetic Dentistry',
                'Dedicated to Patient Comfort & Hygiene'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-2xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg flex items-center gap-2 mx-auto w-fit"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-primary-900 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/10 blur-3xl rounded-full" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                Ready to transform your smile?
              </h2>
              <p className="text-xl text-primary-100 mb-12">
                Book your consultation today and take the first step towards a healthier, brighter smile.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/appointment"
                  className="bg-white text-primary-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-50 transition-all shadow-2xl flex items-center gap-2"
                >
                  <Calendar className="w-6 h-6" />
                  Book Appointment
                </Link>
                <a
                  href="tel:+919876543210"
                  className="bg-primary-600 text-white border border-primary-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-700 transition-all flex items-center gap-2"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
