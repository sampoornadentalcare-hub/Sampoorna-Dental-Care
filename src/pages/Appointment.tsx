import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Calendar, Phone, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  date: z.string().min(1, 'Please select a preferred date'),
  time: z.string().min(1, 'Please select a preferred time'),
  treatment: z.string().min(1, 'Please select a treatment type'),
  message: z.string().optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

export default function Appointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentForm>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentForm) => {
    console.log('Form Data:', data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4 bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for booking an appointment with Sampoorna Dental Care. Our team will contact you shortly to confirm your visit.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div>
            <h2 className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Book Appointment</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Schedule Your <span className="text-primary-600">Visit Today</span>
            </h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Take the first step towards a healthier smile. Fill out the form, and our patient coordinator will get in touch with you to finalize the timing.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Call for Instant Booking</p>
                  <p className="text-xl font-bold text-slate-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">WhatsApp Us</p>
                  <p className="text-xl font-bold text-slate-900">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7 text-slate-600" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Clinic Hours</p>
                  <p className="text-xl font-bold text-slate-900">Mon - Sat: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    {...register('name')}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs font-medium ml-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    {...register('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                  />
                  {errors.phone && <p className="text-red-500 text-xs font-medium ml-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  {...register('email')}
                  placeholder="john@example.com"
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                />
                {errors.email && <p className="text-red-500 text-xs font-medium ml-1">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                  <input
                    {...register('date')}
                    type="date"
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                  />
                  {errors.date && <p className="text-red-500 text-xs font-medium ml-1">{errors.date.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Time</label>
                  <select
                    {...register('time')}
                    className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                  >
                    <option value="">Select Time</option>
                    <option value="morning">Morning (10 AM - 1 PM)</option>
                    <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  {errors.time && <p className="text-red-500 text-xs font-medium ml-1">{errors.time.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Treatment Type</label>
                <select
                  {...register('treatment')}
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all"
                >
                  <option value="">Select Treatment</option>
                  <option value="checkup">General Checkup</option>
                  <option value="cleaning">Cleaning & Whitening</option>
                  <option value="rct">Root Canal Treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Braces & Aligners</option>
                  <option value="other">Other</option>
                </select>
                {errors.treatment && <p className="text-red-500 text-xs font-medium ml-1">{errors.treatment.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message (Optional)</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder="Tell us about your dental concern..."
                  className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/10 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Request Appointment
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
