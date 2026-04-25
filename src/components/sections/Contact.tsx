import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
import { Github, Linkedin, Instagram } from '../ui/Icons';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Replace these with your actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    
    // Simulating API call since keys aren't provided
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      formRef.current?.reset();
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Mail size={24} />, href: "mailto:gnanesh1charlin2@gmail.com", label: "Email" },
    { icon: <Github size={24} />, href: "https://github.com/GnaneshCharlin", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/gnaneshcharlin/", label: "LinkedIn" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/just._.charlieee/", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium mb-4"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Open to Opportunities
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">
          {/* Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 flex flex-col justify-center"
          >
            <div className="glass p-8 rounded-2xl h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Contact Information</h3>
              <div className="space-y-6 mb-8 relative z-10">
                <a href="tel:9941245014" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone</p>
                    <p className="font-medium break-all">+91 9941245014</p>
                  </div>
                </a>

                <a href="mailto:gnanesh1charlin2@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <p className="font-medium break-all">gnanesh1charlin2@gmail.com</p>
                  </div>
                </a>
              </div>

              <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Follow Me</h3>
              <div className="flex gap-4 relative z-10">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-primary border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-slate-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-slate-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-slate-200"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 dark:text-slate-200 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.4)] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  'Message Sent Successfully!'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
