'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, Instagram, Linkedin, Check } from 'lucide-react';



export default function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    project_message: '',
    contact_number: '',
  });


  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }
    
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email address';
    }



    if (!formData.project_message.trim()) {
      newErrors.project_message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    try {
      const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configurations are missing.');
        setStatus('error');
        return;
      }

      // Format current timestamp
      const submittedAt = new Date().toLocaleString('en-US', {
        timeZoneName: 'short',
      });

      // Prepare payload - join checkboxes as a comma-separated string
      const payload: Record<string, string> = {
        user_name: formData.user_name,
        user_email: formData.user_email,
        project_type: 'Bespoke Studio Project',
        project_message: formData.project_message,
        submitted_at: submittedAt,
      };

      if (formData.contact_number.trim()) {
        payload.contact_number = formData.contact_number;
      }

      const result = await emailjs.send(serviceId, templateId, payload, publicKey);

      if (result.status === 200) {
        setStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          project_message: '',
          contact_number: '',
        });

      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto border border-wo-border bg-wo-surface/40 backdrop-blur-md p-6 md:p-8 relative overflow-hidden rounded-none shadow-2xl">
      {/* Space glow ring simulation background */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-wo-amber/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-wo-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-wo-amber/10 via-wo-orange/5 to-transparent rounded-full blur-[60px] pointer-events-none -z-10 animate-pulse" />
      
      {/* Subtle CRT scanning animation inside container */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wo-amber/5 to-transparent h-[400%] pointer-events-none opacity-20 -z-10 animate-[scanline_12s_linear_infinite]" />

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="py-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-none border border-wo-amber/30 bg-wo-amber/5 text-wo-amber mb-6">
              <Check className="w-6 h-6 stroke-[2px]" />
            </div>
            <h3 className="font-serif text-2xl text-wo-white mb-4 tracking-tight">Transmission Secured</h3>
            <p className="font-mono text-[12px] text-wo-text-muted max-w-sm mx-auto leading-relaxed mb-8">
              {`>_`} Project brief successfully submitted. We will evaluate and respond within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 border border-wo-border bg-transparent font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text-muted hover:text-wo-amber hover:border-wo-amber/30 transition-all duration-300 cursor-pointer"
            >
              Send New Brief
            </button>
          </motion.div>
        ) : status === 'error' ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="py-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-none border border-wo-orange/30 bg-wo-orange/5 text-wo-orange mb-6">
              <span className="font-mono text-[20px] font-bold">!</span>
            </div>
            <h3 className="font-serif text-2xl text-wo-white mb-4 tracking-tight">Transmission Interrupted</h3>
            <p className="font-mono text-[12px] text-wo-text-muted max-w-sm mx-auto leading-relaxed mb-8">
              {`>_`} An error occurred while sending. Please try again or reach out directly at{' '}
              <a href="mailto:webovens.in@gmail.com" className="text-wo-amber hover:underline">
                webovens.in@gmail.com
              </a>.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 border border-wo-amber/30 bg-wo-amber/5 font-mono text-[10px] uppercase tracking-[0.2em] text-wo-amber hover:bg-wo-amber hover:text-wo-bg transition-all duration-300 cursor-pointer"
            >
              Retry Submission
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
            noValidate
          >
            {/* Header info */}
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-wo-border/60">
              <h3 className="font-serif text-xl sm:text-2xl text-wo-white font-medium tracking-tight">
                Reach out to us today!
              </h3>
              
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.25em] text-wo-text-muted">Or find us on</span>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/webovens/', label: 'LinkedIn' },
                    { icon: Instagram, href: 'https://www.instagram.com/webovens.in/', label: 'Instagram' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 border border-wo-border hover:border-wo-amber/40 bg-wo-bg flex items-center justify-center text-wo-text-muted hover:text-wo-amber transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Inputs Container */}
            <div className="space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-wo-amber/70 font-semibold block mb-3">
                {`// Leave us a brief message`}
              </span>

              {/* Grid for Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="user_name" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text/80 font-medium">
                    Your name <span className="text-wo-amber/70">*</span>
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className={`w-full bg-wo-bg/70 border ${
                      errors.user_name ? 'border-wo-orange/50' : 'border-wo-text-muted/30 hover:border-wo-text-muted/50'
                    } focus:border-wo-amber/60 px-4 py-3 font-sans text-[13px] text-wo-text outline-none transition-all duration-300`}
                  />
                  {errors.user_name && (
                    <p className="font-mono text-[10px] text-wo-orange/80 mt-1">{errors.user_name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="user_email" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text/80 font-medium">
                    Email <span className="text-wo-amber/70">*</span>
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className={`w-full bg-wo-bg/70 border ${
                      errors.user_email ? 'border-wo-orange/50' : 'border-wo-text-muted/30 hover:border-wo-text-muted/50'
                    } focus:border-wo-amber/60 px-4 py-3 font-sans text-[13px] text-wo-text outline-none transition-all duration-300`}
                  />
                  {errors.user_email && (
                    <p className="font-mono text-[10px] text-wo-orange/80 mt-1">{errors.user_email}</p>
                  )}
                </div>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label htmlFor="contact_number" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text/80 font-medium">
                  Contact Number <span className="text-wo-text-muted/40">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="contact_number"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  className="w-full bg-wo-bg/70 border border-wo-text-muted/30 hover:border-wo-text-muted/50 focus:border-wo-amber/60 px-4 py-3 font-sans text-[13px] text-wo-text outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="project_message" className="block font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text/80 font-medium">
                  Briefly describe your project idea... <span className="text-wo-amber/70">*</span>
                </label>
                <textarea
                  id="project_message"
                  name="project_message"
                  value={formData.project_message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-wo-bg/70 border ${
                    errors.project_message ? 'border-wo-orange/50' : 'border-wo-text-muted/30 hover:border-wo-text-muted/50'
                  } focus:border-wo-amber/60 px-4 py-3 font-sans text-[13px] text-wo-text outline-none transition-all duration-300 resize-y`}
                />
                {errors.project_message && (
                  <p className="font-mono text-[10px] text-wo-orange/80 mt-1">{errors.project_message}</p>
                )}
              </div>
            </div>

            {/* Submit Button & Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[9px] text-wo-text-muted/40">
                {`* All transmission protocols secured`}
              </span>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto min-w-[200px] py-4 bg-wo-text text-wo-bg hover:bg-wo-amber hover:text-wo-bg font-mono text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-wo-bg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    sending brief...
                  </>
                ) : (
                  <>
                    Send a message
                    <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Privacy Policy Notice */}
            <p className="pt-2 font-mono text-[10px] text-wo-text-muted/60 leading-relaxed text-center sm:text-right">
              By submitting this form, you acknowledge our{' '}
              <Link
                href="/privacy-policy"
                className="text-wo-amber/90 hover:text-wo-amber underline underline-offset-2 transition-colors font-medium"
              >
                Privacy Policy
              </Link>{' '}
              and understand that WebOvens may use the information you provide to respond to your enquiry and discuss your project.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
