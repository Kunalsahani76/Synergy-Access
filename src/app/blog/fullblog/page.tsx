'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye, MessageCircle, ChevronRight, Search, Star, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GeometricNetworkBackground from '../../../components/Common/GeometricNetworkBackground';

// Define type for blog posts
type BlogPost = {
  image: string;
  title: string;
  category: string;
  date: string;
  views: number;
  comments: number;
  excerpt: string;
};

// Image imports
const img1 = '/assets/uvss.png';
const img2 = '/assets/Automatic Number.jpeg';
const img3 = '/assets/boombarr.jpg';
const p8 = '/assets/p8.jpg';
const p7 = '/assets/p7.jpg';
const p = '/assets/p2.jpg';
const p1 = '/assets/p3.jpg';
const p4 = '/assets/p4.jpg';
const p5 = '/assets/p5.jpg';
const p6 = '/assets/p6.jpg';
const p9 = '/assets/p9.jpg';
const p10 = '/assets/p10.jpg';
const p11 = '/assets/p11.jpg';
const p12 = '/assets/p12.jpg';
const p13 = '/assets/p13.jpg';
const p14 = '/assets/p14.jpg';
const p15 = '/assets/p15.png';
const p16 = '/assets/p16.jpg';
const p17 = '/assets/p17.jpg';
const p18 = '/assets/p18.jpg';
const p19 = '/assets/p19.jpg';
const p20 = '/assets/p20.jpg';
const p21 = '/assets/p21.jpg';
const p22 = '/assets/p22.jpg';
const p23 = '/assets/p23.jpg';
const p24 = '/assets/p24.jpg';
const p25 = '/assets/p25.png';
const p26 = '/assets/p26.jpg';

const blogPosts: BlogPost[] = [
  // Parking Management Solution
  {
    image: img2,
    title: 'Essential Features for Smart Parking Management System',
    category: 'Parking Management Solution',
    date: 'July 20, 2025',
    views: 986,
    comments: 12,
    excerpt: 'Explore essential features that make a parking management system truly smart and efficient for modern facilities.',
  },
  {
    image: p,
    title: 'Advanced Technology Use in Car Parking Management System',
    category: 'Parking Management Solution',
    date: 'July 10, 2025',
    views: 1102,
    comments: 14,
    excerpt: 'Discover the latest technological innovations revolutionizing parking management systems.',
  },
  {
    image: p1,
    title: 'The Scope of Effective Parking Management System',
    category: 'Parking Management Solution',
    date: 'July 3, 2025',
    views: 823,
    comments: 7,
    excerpt: 'Analyzing the current scope and future potential of parking management systems.',
  },
  {
    image: p4,
    title: 'Improve the Security Aspect with the Parking System',
    category: 'Parking Management Solution',
    date: 'June 28, 2025',
    views: 912,
    comments: 10,
    excerpt: 'How modern parking systems contribute to overall facility security and management.',
  },
  {
    image: p6,
    title: 'AI-Powered Parking Solutions for Smart Cities',
    category: 'Parking Management Solution',
    date: 'June 20, 2025',
    views: 1250,
    comments: 18,
    excerpt: 'How artificial intelligence is transforming urban parking infrastructure and reducing congestion.',
  },
  {
    image: img1,
    title: 'Mobile Integration in Modern Parking Systems',
    category: 'Parking Management Solution',
    date: 'June 15, 2025',
    views: 876,
    comments: 9,
    excerpt: 'The role of mobile apps in enhancing user experience for parking management solutions.',
  },
  {
    image: p5,
    title: 'Revenue Optimization Through Smart Parking',
    category: 'Parking Management Solution',
    date: 'June 5, 2025',
    views: 1023,
    comments: 15,
    excerpt: 'How intelligent parking systems can maximize revenue for commercial facilities.',
  },
  
  // Perimeter Protection
  {
    image: p7,
    title: 'Role of Barriers In Perimeter Protection',
    category: 'Perimeter Protection',
    date: 'July 5, 2025',
    views: 945,
    comments: 11,
    excerpt: 'Understanding how different types of barriers contribute to effective perimeter security.',
  },
  {
    image: p8,
    title: 'Layered Security Approach for Maximum Protection',
    category: 'Perimeter Protection',
    date: 'June 15, 2025',
    views: 876,
    comments: 9,
    excerpt: 'Implementing multiple security layers for comprehensive perimeter defense strategies.',
  },
  {
    image: p9,
    title: 'Advanced Intrusion Detection Systems Comparison',
    category: 'Perimeter Protection',
    date: 'June 10, 2025',
    views: 1023,
    comments: 15,
    excerpt: 'Evaluating different intrusion detection technologies for perimeter security applications.',
  },
  {
    image: p10,
    title: 'Anti-Climb Fencing Solutions for High-Security Sites',
    category: 'Perimeter Protection',
    date: 'May 28, 2025',
    views: 765,
    comments: 4,
    excerpt: 'Specialized fencing solutions designed to prevent unauthorized access attempts.',
  },
  {
    image: p11,
    title: 'Perimeter Lighting Strategies for Enhanced Security',
    category: 'Perimeter Protection',
    date: 'May 15, 2025',
    views: 892,
    comments: 6,
    excerpt: 'How proper lighting enhances perimeter security and deters intruders.',
  },
  
  // Security Gates
  {
    image: p12,
    title: 'Reasons Why Visitor Management Systems is Important',
    category: 'Security Gates',
    date: 'July 24, 2025',
    views: 1205,
    comments: 8,
    excerpt: 'Discover how visitor management systems enhance security, streamline check-ins, and provide valuable insights.',
  },
  {
    image: p13,
    title: 'Applications of Tripod Turnstile Gate',
    category: 'Security Gates',
    date: 'July 8, 2025',
    views: 678,
    comments: 5,
    excerpt: 'Explore various applications and benefits of tripod turnstile gates in access control.',
  },
  {
    image: p14,
    title: 'Utilize Perfect Security Equipment On Site',
    category: 'Security Gates',
    date: 'June 30, 2025',
    views: 1034,
    comments: 13,
    excerpt: 'Guide to choosing and implementing the right security equipment for your facility.',
  },
  {
    image: p15,
    title: 'How Does A Baggage Scanner Works',
    category: 'Security Gates',
    date: 'June 25, 2025',
    views: 867,
    comments: 8,
    excerpt: 'Detailed explanation of baggage scanner technology and its security applications.',
  },
  {
    image: p16,
    title: 'Biometric Access Control: The Future of Security Gates',
    category: 'Security Gates',
    date: 'June 18, 2025',
    views: 1120,
    comments: 12,
    excerpt: 'How biometric technology is revolutionizing security gate authentication.',
  },
  
  // Boom Barrier
  {
    image: p17,
    title: 'Benefits of Using Automatic Boom Barrier',
    category: 'Boom Barrier',
    date: 'July 18, 2025',
    views: 1547,
    comments: 15,
    excerpt: 'Learn about the advantages of installing automatic boom barriers for enhanced traffic control and security.',
  },
  {
    image: p18,
    title: 'How does the boom barrier contribute toward safety?',
    category: 'Boom Barrier',
    date: 'July 12, 2025',
    views: 756,
    comments: 9,
    excerpt: 'Exploring the safety features and benefits of boom barriers in various security applications.',
  },
  {
    image: p19,
    title: 'Weather-Resistant Boom Barriers for Outdoor Use',
    category: 'Boom Barrier',
    date: 'June 5, 2025',
    views: 892,
    comments: 7,
    excerpt: 'Specialized boom barrier solutions designed to withstand harsh environmental conditions.',
  },
  {
    image: p20,
    title: 'Custom Boom Barrier Solutions for Unique Requirements',
    category: 'Boom Barrier',
    date: 'May 22, 2025',
    views: 943,
    comments: 8,
    excerpt: 'Tailored boom barrier installations for special applications and challenging environments.',
  },
  
  // DFMD
  {
    image: p21,
    title: 'How does Door Frame Metal Detector Work? DFMD Types Explained',
    category: 'DFMD',
    date: 'July 15, 2025',
    views: 892,
    comments: 6,
    excerpt: 'Understanding the technology behind door frame metal detectors and their various applications in security.',
  },
  {
    image: p22,
    title: 'Advanced DFMD Configurations for High-Security Facilities',
    category: 'DFMD',
    date: 'May 28, 2025',
    views: 765,
    comments: 4,
    excerpt: 'Custom DFMD setups for government buildings, airports, and other sensitive locations.',
  },
  {
    image: p23,
    title: 'DFMD Sensitivity Calibration Best Practices',
    category: 'DFMD',
    date: 'May 10, 2025',
    views: 654,
    comments: 3,
    excerpt: 'Proper techniques for calibrating door frame metal detectors to balance security and convenience.',
  },
  
  // Automatic Boom Barrier
  {
    image: img2,
    title: 'Smart Boom Barriers with ANPR Integration',
    category: 'Automatic Boom Barrier',
    date: 'May 15, 2025',
    views: 1120,
    comments: 12,
    excerpt: 'How automatic number plate recognition enhances boom barrier functionality and security.',
  },
  {
    image: img3,
    title: 'Energy-Efficient Automatic Boom Barrier Solutions',
    category: 'Automatic Boom Barrier',
    date: 'May 5, 2025',
    views: 943,
    comments: 8,
    excerpt: 'Eco-friendly boom barrier systems with solar power options and low-energy consumption.',
  },
  {
    image: p24,
    title: 'Customizable Automatic Boom Barriers for Unique Requirements',
    category: 'Automatic Boom Barrier',
    date: 'April 28, 2025',
    views: 875,
    comments: 6,
    excerpt: 'Tailored boom barrier solutions for special applications and challenging environments.',
  },
  {
    image: p25,
    title: 'Automatic Boom Barrier Maintenance Guide',
    category: 'Automatic Boom Barrier',
    date: 'April 15, 2025',
    views: 1023,
    comments: 9,
    excerpt: 'Essential maintenance procedures to keep your automatic boom barriers operating optimally.',
  },
  {
    image: p26,
    title: 'Wireless Control Options for Automatic Boom Barriers',
    category: 'Automatic Boom Barrier',
    date: 'April 5, 2025',
    views: 765,
    comments: 5,
    excerpt: 'Exploring remote and wireless control solutions for automatic boom barrier systems.',
  }
];

const FullBlog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  // Set a random featured post on component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 5); // Get one of the first 5 posts
    setFeaturedPost(blogPosts[randomIndex]);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories for filter buttons
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <GeometricNetworkBackground />
      </div>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoLTZ2LTZoNnptLTYgMGgtNnY2aDZ2LTZ6bTEyIDB2LTZoLTZ2Nmg2em0wLTZoNnYtNmgtNnY2em0wIDBoLTZ2LTZoNnY2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Security Insights & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
              Stay informed with the latest trends, technologies, and best practices in security and access control systems.
            </p>
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-5 py-4 pr-12 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/20 shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-4 text-blue-200" size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredPost && (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="lg:flex">
              <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                    <Star size={12} className="mr-1" />
                    Featured
                  </span>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1 text-indigo-500" />
                    {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye size={16} className="text-indigo-500" />
                      {featuredPost.views.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={16} className="text-indigo-500" />
                      {featuredPost.comments}
                    </div>
                  </div>
                  <a 
                    href={`/blog/${encodeURIComponent(featuredPost.title.toLowerCase().replace(/ /g, '-'))}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md"
                  >
                    Read More
                    <ChevronRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100'
              }`}
              whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Cards */}
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-md">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-indigo-500" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-indigo-500" />
                        <span className="text-gray-600">Admin</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Eye size={16} className="text-indigo-500" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={16} className="text-indigo-500" />
                          {post.comments}
                        </div>
                      </div>
                      <a
                        href={`/blog/${encodeURIComponent(post.title.toLowerCase().replace(/ /g, '-'))}`}
                        className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md"
                      >
                        Read More
                        <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="py-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
              <button 
                className="mt-6 px-6 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FullBlog;