'use client';
import React, { useState } from 'react';
import { MapPin, Clock, Send, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { FloatingDots, AnimatedGrid } from '../components/backgroundDesigns/page';
import GeometricNetworkBackground from '../components/Common/GeometricNetworkBackground';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjects = [
    'General Inquiry',
    'Product Information',
    'Technical Support',
    'Sales Question',
    'Feedback'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Animation variants
  const formAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative">
      <div className="absolute inset-0 z-0">
        <GeometricNetworkBackground className="absolute inset-0" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">We&apos;d love to hear from you. Fill out the form below and our team will get back to you as soon as possible.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
        {/* Formspree Form */}
        <motion.form
          action="https://formspree.io/f/mgvzpolk"
          method="POST"
          variants={formAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <FloatingDots />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
            <motion.div variants={itemAnimation} className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-gray-50 hover:bg-white focus:bg-white"
                required
              />
            </motion.div>
            <motion.div variants={itemAnimation} className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+919876543210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-gray-50 hover:bg-white focus:bg-white"
                required
              />
            </motion.div>
            <motion.div variants={itemAnimation} className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-gray-50 hover:bg-white focus:bg-white"
                required
              />
            </motion.div>
            <motion.div variants={itemAnimation} className="relative">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-gray-50 hover:bg-white focus:bg-white appearance-none"
                required
              >
                <option value="">Select a subject</option>
                {subjects.map((subj, i) => (
                  <option key={i} value={subj}>{subj}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowRight className="h-4 w-4 text-gray-400" />
              </div>
            </motion.div>
          </div>
          {/* Message */}
          <motion.div variants={itemAnimation} className="mb-6 relative z-10">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your requirements or questions..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-gray-50 hover:bg-white focus:bg-white"
              required
            />
          </motion.div>
          <motion.button
            variants={itemAnimation}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 relative z-10"
          >
            <Send className="w-5 h-5" />
            Send Message
          </motion.button>
        </motion.form>
        {/* Info Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full lg:w-1/3 space-y-6"
        >
          {/* Contact Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-indigo-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <AnimatedGrid />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a href="tel:+919999339265" className="text-gray-800 hover:text-indigo-600 transition">
                      +91 99993 39265
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a href="mailto:business@synergy-access.com" className="text-gray-800 hover:text-indigo-600 transition">
                      business@synergy-access.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Office Location */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <FloatingDots />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Location</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Head Office</p>
                    <p className="text-gray-800">
                      B-103<br />
                      Sector-2 Noida,<br />
                      201301, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Directions</p>
                    <p className="text-gray-800">5 minutes from Sector 15 Metro Station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <AnimatedGrid />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Hours</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Form;
