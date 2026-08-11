import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head'

const testimonials = [
  {
    name: 'Dev shukla',
    role: 'Project Manager',
    message: 'I’ve had the privilege of working with the Synergy Access team for over a year, and throughout this time, they have proven to be highly efficient and exceptionally knowledgeable.',
    rating: 5
  },
  {
    name: 'R.K. Bansal',
    role: 'Manager Purchase',
    message: 'The quality of products and the after-sales support from Synergy Access have been outstanding, with their team consistently responding promptly and attentively to our needs.',
    rating: 4
  },
  {
    name: 'Parth Joisar',
    role: 'Contractor - Air Force',
    message: 'We have relied on Synergy Access’s security system for the past five years, and it has consistently performed flawlessly, backed by their excellent service and support.',
    rating: 5
  },
  {
    name: 'Vipin',
    role: 'Project Head',
    message: 'As Project Head, I can attest that we have depended on Synergy Access’s security system for the past five years. It has delivered flawless performance throughout, supported by their exceptional service and unwavering commitment.',
    rating: 5
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Testimonials | Synergy Access Customer Reviews</title>
        <meta name="description" content="Read what our customers say about Synergy Access automation products and services. Genuine reviews and testimonials from satisfied clients." />
        <meta name="keywords" content="testimonials, reviews, customer feedback, synergy access, boom barrier, access control, security systems" />
        <meta property="og:title" content="Synergy Access Testimonials" />
        <meta property="og:description" content="Discover real customer experiences with Synergy Access automation and security solutions." />
      </Head>

      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <motion.div 
            className="inline-block px-6 py-3 mb-4 text-sm font-semibold tracking-wider text-red-600 uppercase bg-red-100 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.div 
            className="w-16 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-red-500 to-red-700"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Arrow */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-20 p-3 text-white transition-all duration-300 bg-red-600 rounded-full shadow-lg hover:bg-red-700 focus:outline-none md:left-[-60px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Testimonial Cards */}
          <div className="relative w-full h-[400px] overflow-hidden">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={current}
                className="absolute inset-0 flex items-center justify-center"
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="relative w-full max-w-2xl p-8 mx-4 bg-white shadow-lg rounded-xl">
                  {/* Quote Icon */}
                  <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                    <div className="flex items-center justify-center w-16 h-16 bg-red-600 rounded-full shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  {renderStars(testimonials[current].rating)}

                  {/* Testimonial Content */}
                  <p className="mb-6 text-lg italic text-gray-700">
                    &ldquo;{testimonials[current].message}&rdquo;
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-800">{testimonials[current].name}</h4>
                    <p className="text-sm font-medium text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-0 z-20 p-3 text-white transition-all duration-300 bg-red-600 rounded-full shadow-lg hover:bg-red-700 focus:outline-none md:right-[-60px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${current === index ? 'bg-red-600 w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;