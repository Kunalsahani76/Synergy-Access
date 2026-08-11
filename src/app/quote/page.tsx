'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  quantity: string;
  location: string;
  message: string;
}

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuoteFormData>();

  const products = [
    'Boom Barriers',
    'Bollards',
    'Tripod Turnstiles',
    'Flap Barriers',
    'Full Height Turnstiles',
    'Road Blockers',
    'Tyre Killers',
    'ANPR Solutions',
    'Parking Management System',
    'Biometric Access Control',
    'Face Recognition System',
    'RFID Solutions',
    'QR Code Solutions',
    'Visitor Management System',
    'DFMD (Door Frame Metal Detector)',
    'HHMD (Hand Held Metal Detector)',
    'Baggage Scanner',
    'UVSS (Under Vehicle Surveillance)',
    'Siren Systems',
    'Other'
  ];

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Quote data:', data); // Use the data parameter
      toast.success('Quote request submitted successfully! We will contact you soon.');
      reset();
    } catch (error) {
      console.error('Quote submission error:', error); // Use the error parameter
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Free Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Request a customized quote for your entrance automation requirements
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request Quote
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      {...register('company')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product/Service *
                  </label>
                  <select
                    {...register('product', { required: 'Please select a product' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Product/Service</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  {errors.product && (
                    <p className="text-red-500 text-sm mt-1">{errors.product.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity
                    </label>
                    <input
                      {...register('quantity')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter quantity"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      {...register('location')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Quote'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 99993 39265</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@synergy-access.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">Delhi NCR, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose Synergy Access?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    15+ years of industry experience
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    1000+ successful installations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    24/7 technical support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    ISO certified products
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    Pan-India service network
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}