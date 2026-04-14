import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Local Resident',
    content: 'Dr. Himani is amazing! I was terrified of root canals, but she made the whole process completely painless. The clinic is very clean and modern.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    name: 'Priya Patel',
    role: 'Working Professional',
    content: 'Best dental experience in Vikhroli. I got my teeth whitened here and the results are fantastic. The staff is very professional and polite.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=priya'
  },
  {
    name: 'Amit Verma',
    role: 'Parent',
    content: 'Took my 6-year-old for a checkup. Dr. Himani was so gentle and patient. My son actually enjoyed his visit to the dentist!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=amit'
  },
  {
    name: 'Sneha Gupta',
    role: 'Student',
    content: 'Got my clear aligners from Sampoorna. The treatment plan was explained clearly and the progress has been great. Highly recommend!',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sneha'
  },
  {
    name: 'Vikram Singh',
    role: 'Business Owner',
    content: 'The hygiene standards here are top-notch. I felt very safe during my implant procedure. Professional care at its best.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=vikram'
  },
  {
    name: 'Anjali Desai',
    role: 'Teacher',
    content: 'Very reasonable pricing for such high-quality service. Dr. Himani takes the time to explain everything. No unnecessary treatments suggested.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=anjali'
  }
];

export default function Testimonials() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
            What Our Patients Say
          </h1>
          <p className="text-lg text-slate-600">
            We take pride in our work and the smiles we create. Read about the experiences of our valued patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all relative group"
            >
              <div className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}
