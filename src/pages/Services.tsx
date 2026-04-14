import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Award, 
  Smile, 
  Baby, 
  Stethoscope,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive oral exams, digital X-rays, and professional cleanings to maintain your oral health.',
    icon: ShieldCheck,
    features: ['Routine Checkups', 'Digital X-Rays', 'Professional Cleaning', 'Oral Cancer Screening'],
    image: 'https://picsum.photos/seed/general/600/400'
  },
  {
    id: 'whitening',
    title: 'Teeth Cleaning & Whitening',
    description: 'Remove stains and brighten your smile with our professional whitening treatments.',
    icon: Sparkles,
    features: ['Scaling & Polishing', 'In-Office Whitening', 'Take-Home Kits', 'Stain Removal'],
    image: 'https://picsum.photos/seed/whitening/600/400'
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Painless root canal procedures to save your natural teeth and relieve pain.',
    icon: Activity,
    features: ['Single Sitting RCT', 'Painless Procedure', 'Post & Core', 'Laser RCT'],
    image: 'https://picsum.photos/seed/rct/600/400'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'The gold standard for replacing missing teeth with permanent, natural-looking implants.',
    icon: Award,
    features: ['Single Tooth Implants', 'Full Mouth Rehab', 'All-on-4 / All-on-6', 'Bone Grafting'],
    image: 'input_file_0.png'
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    description: 'Straighten your teeth and correct your bite with modern orthodontic solutions.',
    icon: Smile,
    features: ['Clear Aligners', 'Ceramic Braces', 'Metal Braces', 'Invisalign'],
    image: 'https://picsum.photos/seed/braces/600/400'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly and comfortable environment.',
    icon: Baby,
    features: ['Milk Tooth Fillings', 'Fluoride Application', 'Pit & Fissure Sealants', 'Habit Breaking'],
    image: 'https://picsum.photos/seed/kids/600/400'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and complete smile makeovers.',
    icon: Stethoscope,
    features: ['Porcelain Veneers', 'Smile Designing', 'Dental Bonding', 'Gum Contouring'],
    image: 'input_file_4.mp4'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            Expert Dental Solutions
          </h1>
          <p className="text-lg text-slate-600">
            We provide a full spectrum of dental services to help you achieve and maintain a beautiful, healthy smile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl border border-slate-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary-50 text-primary-700 py-3 rounded-2xl font-bold hover:bg-primary-100 transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="mt-32 bg-red-50 rounded-[40px] p-8 md:p-16 border border-red-100">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-red-600/20">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Emergency Dental Care</h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl">
                Toothache? Broken tooth? Dental emergencies can happen anytime. We offer priority appointments for urgent dental issues.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                Call Emergency: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
