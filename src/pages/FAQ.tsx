import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is dental treatment painful?',
    answer: 'At Sampoorna Dental Care, we use modern anesthesia and gentle techniques to ensure your treatment is as painless as possible. Most patients report feeling very little to no discomfort during procedures like root canals or extractions.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend a professional checkup and cleaning every six months. Regular visits help us catch potential issues early and keep your teeth and gums healthy.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'If you have a dental emergency, such as a broken tooth or severe pain, call us immediately at +91 98765 43210. We prioritize emergency cases and will try to see you as soon as possible.',
  },
  {
    question: 'Are dental implants better than dentures?',
    answer: 'Dental implants are generally considered the best long-term solution for missing teeth as they look, feel, and function like natural teeth. They also help prevent bone loss in the jaw, which dentures cannot do.',
  },
  {
    question: 'How much do braces or aligners cost?',
    answer: 'The cost of orthodontic treatment depends on the complexity of the case and the type of braces or aligners chosen. We offer a variety of options and flexible payment plans to suit your budget.',
  },
  {
    question: 'Is the clinic safe and hygienic?',
    answer: 'Yes, patient safety is our top priority. We follow strict international sterilization protocols, using autoclaved instruments and disposable materials wherever possible to ensure a 100% sterile environment.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our treatments, clinic, and dental health.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.question}</span>
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary-600">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary-600 rounded-[32px] p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">
            If you couldn't find the answer you're looking for, feel free to contact us directly. We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
            >
              Call Us Now
            </a>
            <button className="bg-primary-700 text-white border border-primary-500 px-8 py-3 rounded-full font-bold hover:bg-primary-800 transition-all">
              Email Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
