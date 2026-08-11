'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function NewsBlogPage() {
  const featuredPosts = [
    {
      title: 'Benefits of Using Automatic Boom Barriers',
      excerpt: 'Discover how automatic boom barriers enhance security and streamline vehicle access control.',
      image: '/assets/boombarr.jpg',
      date: '2024-12-10',
      category: 'Access Control',
      slug: '/blog/benefits-of-using-automatic-boom-barrier'
    },
    {
      title: 'ANPR Technology Guide',
      excerpt: 'Complete guide to Automatic Number Plate Recognition technology and applications.',
      image: '/assets/anpr.jpg',
      date: '2024-12-08',
      category: 'Technology',
      slug: '/blog/anprtechnology'
    },
    {
      title: 'Smart Parking Management Systems',
      excerpt: 'How smart parking solutions are revolutionizing urban mobility in Indian cities.',
      image: '/assets/parking.jpg',
      date: '2024-12-05',
      category: 'Parking Systems',
      slug: '/blog/smartparking'
    }
  ];

  const recentNews = [
    {
      title: 'Synergy Access Expands Service Network to 50+ Cities',
      date: '2024-12-12',
      excerpt: 'We are proud to announce the expansion of our service network to cover 50+ cities across India.'
    },
    {
      title: 'New ISO Certification Achieved',
      date: '2024-12-01',
      excerpt: 'Synergy Access achieves additional ISO certifications for quality management systems.'
    },
    {
      title: 'Partnership with Leading Real Estate Developers',
      date: '2024-11-28',
      excerpt: 'Strategic partnerships formed with top real estate developers for integrated security solutions.'
    }
  ];

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
              News & Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay updated with the latest news, insights, and trends in entrance automation
            </p>
          </motion.div>
        </div>
      </section>
      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              In-depth articles about entrance automation and security systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.slug}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Latest News
              </h2>
              <div className="space-y-6">
                {recentNews.map((news, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(news.date).toLocaleDateString()}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600">
                      {news.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest updates on entrance automation technology.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}