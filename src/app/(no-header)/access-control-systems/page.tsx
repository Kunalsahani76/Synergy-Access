"use client";

import { useState, useEffect } from 'react';
import {
  Shield, ArrowRight, CheckCircle, Settings, Users, Award,
  ChevronLeft, ChevronRight, Star, Building, Home, Lock
} from 'lucide-react';
import SEOHead from '@/components/SEO/SEOHead';

import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';
import { motion } from "framer-motion";

import QuoteForm from './QuoteForm';

export default function AccessControlSystems() {
  // SEO keywords for access control systems page
  const seoKeywords = [
    "access control system",
    "access control solution",
    "access control",
    "access control solutions",
    "access control system",
    "access control security",
    "access security",
    "access systems",
    "security access control systems",
    "access control products",
    "access management software",
    "hand held metal detector",
    "parking access control systems",
    "metal detector",
    "boom barrier",
    "security and access control",
    "access security systems",
    "access control company",
    "security access control system",
    "security access systems",
    "best access control system",
    "security systems",
    "access security solutions",
    "commercial access control systems",
    "security solutions",
    "entrance control",
    "security automation",
    "automatic barrier",
    "gate access control",
    "security and access control systems",
    "parking barrier",
    "door access control system",
    "barrier bollards",
    "control products",
    "access control system company",
    "access control device",
    "access automation",
    "tripod turnstile",
    "access solution",
    "security device",
    "security control systems",
    "boom barrier system",
    "tripod turnstile gate",
    "controlled solutions",
    "security industry",
    "barrier parking",
    "metal detector door",
    "access control system door",
    "advanced systems",
    "automatic boom",
    "controlled door access systems",
    "controlled access security",
    "barrier automatic",
    "security & access control",
    "barrier for parking",
    "barrier turnstile",
    "detector metal detector",
    "automatic detector",
    "metal detector metal detector",
    "metal detector metal",
    "gate and access control",
    "metal sensors",
    "detector system",
    "security automatic"
  ].join(", ");



  const [stats, setStats] = useState([
    { value: 0, target: 200, label: "Projects Completed" },
    { value: 0, target: 150, label: "Happy Clients" },
    { value: 0, target: 500, label: "Products Installed" },
    { value: 0, target: 6, label: "Years Experience" }
  ]);

  // Project showcase state
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isClient, setIsClient] = useState(false);



  const projects = [
    {
      image: "https://images.pexels.com/photos/17155842/pexels-photo-17155842.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Corporate Office Security Gates",
      description: "Advanced sliding gates with biometric access control",
      icon: <Building className="h-6 w-6" />,
    },
    {
      image: "https://images.pexels.com/photos/11850871/pexels-photo-11850871.jpeg",
      title: "Industrial Boom Barriers",
      description: "Heavy-duty automatic barriers for warehouse security",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      image: "https://images.pexels.com/photos/13165402/pexels-photo-13165402.jpeg",
      title: "Residential Automated Gates",
      description: "Smart home integration with mobile app control",
      icon: <Home className="h-6 w-6" />,
    },
    {
      image: "https://images.pexels.com/photos/32638089/pexels-photo-32638089.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Crash-Rated Bollards",
      description: "High-security perimeter protection for critical infrastructure",
      icon: <Lock className="h-6 w-6" />,
    },
  ];

  const testimonials = [
    {
      name: "Parth Joisar",
      company: "Air Force",
      text: "We have relied on Synergy Access's security system for the past five years, and it has consistently performed flawlessly, backed by their excellent service and support.",
      rating: 5,
      role: "Contractor",
    },
    {
      name: "Vipin",
      company: "Synergy Access",
      text: "As Project Head, I can attest that we have depended on Synergy Access's security system for the past five years. It has delivered flawless performance throughout, supported by their exceptional service and unwavering commitment.",
      rating: 5,
      role: "Project Head",
    },
    {
      name: "Dev Shukla",
      company: "Synergy Access",
      text: "I've had the privilege of working with the Synergy Access team for over a year, and throughout this time, they have proven to be highly efficient and exceptionally knowledgeable.",
      rating: 5,
      role: "Project Manager",
    },
    {
      name: "R.K. Bansal",
      company: "Synergy Access",
      text: "The quality of products and the after-sales support from Synergy Access have been outstanding, with their team consistently responding promptly and attentively to our needs.",
      rating: 5,
      role: "Manager Purchase",
    },
  ];



  // Client-side detection
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Project/Testimonial carousel
  useEffect(() => {
    if (!isClient) return;

    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => {
      clearInterval(projectInterval);
      clearInterval(testimonialInterval);
    };
  }, [isClient, projects.length, testimonials.length]);

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      return setTimeout(() => {
        const increment = Math.ceil(stat.target / 30);
        const interval = setInterval(() => {
          setStats(prevStats => {
            const newStats = [...prevStats];
            if (newStats[index].value < newStats[index].target) {
              newStats[index].value = Math.min(
                newStats[index].value + increment,
                newStats[index].target
              );
            } else {
              clearInterval(interval);
            }
            return newStats;
          });
        }, 50);
        return interval;
      }, 300 * index);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [stats]);


  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <SEOHead
        title="Access Control Systems | Synergy Access Pvt. Ltd."
        description="Leading manufacturer of entrance automation and intelligent access control solutions. Boom barriers, bollards, turnstiles, parking management, and security systems."
        keywords={seoKeywords}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden m-0 p-0 w-full max-h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="automation security"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/60 to-purple-800/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div className="text-white animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 mt-2 sm:mt-0 leading-tight">
                Smart Automation Solutions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  Safer, Smarter Access
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-md sm:max-w-lg">
                We provide advanced barriers, gates, bollards & sliding doors
                designed for modern infrastructure.
              </p>

            </div>

            {/* Lead Form - Made smaller */}
            <div className="animate-fade-in-up animation-delay-600">
              <QuoteForm size="small" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {index === 0 && <CheckCircle className="h-10 w-10 text-white" />}
                  {index === 1 && <Users className="h-10 w-10 text-white" />}
                  {index === 2 && <Settings className="h-10 w-10 text-white" />}
                  {index === 3 && <Award className="h-10 w-10 text-white" />}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}+</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Why Choose Synergy Access</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Industry-leading expertise with commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-all duration-300 group-hover:rotate-12">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Security</h3>
                <p className="text-gray-600">
                  Cutting-edge security systems with real-time monitoring and threat detection
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-indigo-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-all duration-300 group-hover:rotate-12">
                  <Settings className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Automation</h3>
                <p className="text-gray-600">
                  Intelligent systems that adapt to your needs with minimal maintenance
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-all duration-300 group-hover:rotate-12">
                  <Users className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Dedicated support team with rapid response times and comprehensive service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section - Imported from Solutions Page */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Automation Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive range of access control and automation systems designed for modern infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none rounded-xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-all duration-300 group-hover:rotate-12">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automatic Barriers</h3>
                <p className="text-gray-600 mb-6">
                  Advanced boom barriers and road blockers for vehicle access control with RFID and license plate recognition.
                </p>

              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none rounded-xl overflow-hidden bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-all duration-300 group-hover:rotate-12">
                  <Settings className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Gates</h3>
                <p className="text-gray-600 mb-6">
                  Smart swing, sliding, and folding gates with mobile app integration and biometric access control.
                </p>

              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none rounded-xl overflow-hidden bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-all duration-300 group-hover:rotate-12">
                  <ArrowRight className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sliding Doors</h3>
                <p className="text-gray-600 mb-6">
                  Sensor-based automatic sliding doors for commercial and industrial applications with safety features.
                </p>

              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none rounded-xl overflow-hidden bg-gradient-to-br from-white to-orange-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-all duration-300 group-hover:rotate-12">
                  <CheckCircle className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security Bollards</h3>
                <p className="text-gray-600 mb-6">
                  Fixed, retractable, and crash-rated bollards for perimeter protection and traffic control systems.
                </p>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our diverse portfolio of security automation solutions tailored to different industries and requirements.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-[500px] md:h-[600px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-2xl">
                          <div className="flex items-center mb-4">
                            <div className="p-3 bg-blue-600 rounded-xl mr-4">
                              {project.icon}
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-white">{project.title}</h3>
                          </div>
                          <p className="text-lg md:text-xl text-gray-200 mb-6">{project.description}</p>

                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-blue-600 w-8' : 'bg-gray-300'
                    }`}
                  onClick={() => setCurrentProject(index)}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Testimonials */}
      {isClient && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Hear what our satisfied clients have to say about our solutions and services.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 max-w-3xl mx-auto leading-relaxed">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </blockquote>
                <div className="mb-8">
                  <p className="font-bold text-xl text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600 text-lg">{testimonials[currentTestimonial].role}</p>
                  <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                      }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Form Section with Design Element */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            {/* Left Design Element */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-10 -right-6 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-600">Industry-leading expertise with 6+ years of experience</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-600">Advanced security solutions with real-time monitoring</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-600">24/7 dedicated support with rapid response times</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <p className="ml-3 text-gray-600">Custom solutions tailored to your specific needs</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-lg font-medium text-gray-900">200+ Projects Completed</p>
                        <p className="text-gray-600">Trusted by industry leaders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

                <QuoteForm size="small" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                width: `${Math.random() * 100 + 20}px`,
                height: `${Math.random() * 100 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-2"
            >
              <div className="inline-flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Shield className="h-5 w-5 text-white mr-2" />
                <span className="text-sm font-medium text-white">Start Your Project Today</span>
              </div>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Premises?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let our experts design a custom automation solution tailored to your specific security needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >

            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>
    </div>
  );
}