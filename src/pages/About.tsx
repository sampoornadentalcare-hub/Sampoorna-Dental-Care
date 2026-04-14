import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, ShieldCheck, Microscope } from 'lucide-react';

const values = [
  {
    title: 'Patient Centric',
    description: 'We prioritize your comfort and well-being in every treatment we provide.',
    icon: Heart,
  },
  {
    title: 'Modern Technology',
    description: 'Equipped with the latest dental tech for precise and painless treatments.',
    icon: Microscope,
  },
  {
    title: 'Highest Hygiene',
    description: 'Strict sterilization protocols to ensure a safe environment for everyone.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Care',
    description: 'Years of specialized experience in complex dental procedures.',
    icon: Award,
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Our Story</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              A Legacy of <span className="text-primary-600">Healthy Smiles</span> in Vikhroli
            </h1>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-slate-100">
              <p>
                Sampoorna Dental Care was founded with a simple mission: to provide high-quality, accessible, and compassionate dental care to the community of Vikhroli and beyond.
              </p>
              <p>
                We believe that a healthy smile is the foundation of overall well-being. That's why we've built a clinic that combines the warmth of a family practice with the precision of a modern medical facility.
              </p>
              <p>
                Under the leadership of Dr. Himani Singh, our team has helped thousands of patients overcome their dental anxieties and achieve the smiles they've always wanted.
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold">100% Sterilization</p>
                  <p className="text-slate-500 text-sm">We follow international safety standards for every patient.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Doctor Profile */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-slate-100 mb-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">Dr. Himani Singh</h2>
            <p className="text-xl text-primary-600 font-semibold mb-6">BDS, Fellow in Oral Implantology (GDC Mumbai)</p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Dr. Himani Singh is the lead dentist at Sampoorna Dental Care. She completed her BDS and went on to pursue a prestigious Fellowship in Oral Implantology from the Government Dental College (GDC), Mumbai. Her expertise lies in complex extractions, dental implants, and aesthetic smile makeovers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '10+ Years of Clinical Experience',
                'Fellowship from GDC Mumbai',
                'Expert in Implant Dentistry',
                'Specialist in Pediatric Care',
                'Advanced Aesthetic Training',
                'Member of Dental Associations'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <p className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Core Values
          </p>
          <p className="text-lg text-slate-600">
            We are committed to providing the highest standard of dental care in a comfortable and friendly environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
