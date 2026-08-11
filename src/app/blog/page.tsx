import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Folder, MessageSquare, Phone } from 'lucide-react';
import InternalLinks from '@/components/SEO/InternalLinks';
const blog = '/assets/newandblog.jpg';
const anpr = '/assets/Automatic Number.jpeg'
const Bollard = '/assets/bollard.jpg';
const barrier = '/assets/barrier.png'
const parking = '/assets/parking-management.jpeg'
const bio ='/assets/Biometric – Fingerprint.jpg'
const smart = '/assets/P-GATE.jpg'

const Blog = () => {
  const recentPosts = [
    {
      slug: 'hydraulicBollards',
      title: 'Hydraulic Bollards: The Key to Advanced Security and Efficient Traffic Management',
      date: 'May 23, 2025',
      excerpt: 'Discover how hydraulic bollards provide robust security while maintaining smooth traffic flow in urban environments.',
      category: 'Security',
      image: Bollard
    },
    {
      slug: 'automaticboombarrier',
      title: 'Automatic Boom Barrier: Enhancing Security & Access Control',
      date: 'April 11, 2025',
      excerpt: 'Learn about the latest innovations in automatic boom barrier technology for superior access control.',
      category: 'Technology',
      image: barrier
    },
    {
      slug: 'smartparking',
      title: 'Smart Parking Solutions for Urban Areas',
      date: 'March 28, 2025',
      excerpt: 'How modern parking systems are revolutionizing urban mobility and reducing congestion.',
      category: 'Technology',
      image: parking
    },
    {
      slug: 'biometricaccess',
      title: 'Biometric Access Control: The Future of Security',
      date: 'March 15, 2025',
      excerpt: 'Exploring the benefits of biometric systems for high-security facilities.',
      category: 'Security',
      image: bio
    },
    {
      slug: 'anprtechnology',
      title: 'ANPR Technology: Revolutionizing Vehicle Access',
      date: 'February 22, 2025',
      excerpt: 'How Automatic Number Plate Recognition is changing the game for parking management.',
      category: 'Innovation',
      image: anpr
    },
    {
      slug: 'perimetersecurity',
      title: 'Perimeter Security Best Practices',
      date: 'January 30, 2025',
      excerpt: 'Essential strategies for protecting your facility with advanced perimeter solutions.',
      category: 'Commercial',
      image: smart
    }
  ];

  const categories = [
    { name: 'Commercial', count: 5 },
    { name: 'Home Security', count: 3 },
    { name: 'Security', count: 8 },
    { name: 'Technology', count: 4 },
  ];

  const archives = [
    { month: 'May 2025', count: 2 },
    { month: 'April 2025', count: 3 },
    { month: 'March 2025', count: 1 },
  ];

  return (
    <main className="min-h-screen">
      <Head>
        <title>Blog & News | Synergy Access</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="Latest insights, news, and updates from Synergy Access. Stay informed about security solutions and access control technology." />
        <meta name="keywords" content="blog, news, security solutions, access control, Synergy Access" />
      </Head>

      {/* Responsive Top Banner Image */}
            <div className="relative w-full h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-8">
              <Image
                src={blog}
                alt="Consultancy Banner"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              />
              
            </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 px-4 py-8 mx-auto max-w-7xl sm:gap-12 max-w-full sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:flex-row">
        {/* Articles Section */}
        <section className="lg:w-2/3">
          {/* Latest Posts */}
          <section className="mb-8 overflow-hidden transition-all bg-white shadow-lg rounded-xl hover:shadow-xl sm:mb-12">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h3 className="flex items-center gap-2">
                <MessageSquare size={18} /> LATEST POSTS
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-gray-800">Stay Updated</h4>
                <p className="text-sm text-gray-600">
                  Discover our latest insights, news, and updates about security solutions and access control technology.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {recentPosts.map((post, idx) => (
                  <Link key={idx} href={`/blog/${post.slug}`} className="block transition-colors duration-300 group">
                    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg group-hover:shadow-md">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 text-xs font-bold text-orange-600 bg-orange-100 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-orange-500">{post.title}</h4>
                        <p className="text-sm text-gray-600">{post.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link href="/blog/fullblog" className="inline-block px-4 py-2 text-sm font-medium text-blue-600 transition hover:text-blue-800 hover:underline">
                  View all blog posts
                </Link>
              </div>
            </div>
          </section>

          {/* Comment Form */}
          <section className="mb-12 overflow-hidden bg-white shadow-lg rounded-xl">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h2 className="text-lg font-bold">Leave a comment</h2>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  placeholder="Write your thoughts here..."
                  rows={5}
                />
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-5 h-5 rounded focus:ring-2 focus:ring-orange-400"
                  />
                  <label htmlFor="save-info" className="text-sm text-gray-600">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 font-bold text-white bg-orange-500 rounded-lg shadow-md transition hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-1"
                >
                  POST COMMENT
                </button>
              </form>
            </div>
          </section>
        </section>

        {/* Sidebar */}
        <aside className="space-y-8 lg:w-1/3">
          {/* Search Widget */}
          <section className="overflow-hidden bg-white shadow-lg rounded-xl transition hover:shadow-xl">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h3 className="flex items-center gap-2">
                <Search size={18} /> SEARCH
              </h3>
            </div>
            <div className="p-6 relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full p-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orange-500 rounded-lg text-white hover:bg-orange-600 transition">
                <Search size={18} />
              </button>
            </div>
          </section>

          {/* Categories Widget */}
          <section className="overflow-hidden bg-white shadow-lg rounded-xl transition hover:shadow-xl">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h3 className="flex items-center gap-2">
                <Folder size={18} /> CATEGORIES
              </h3>
            </div>
            <div className="p-6">
              <ul>
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex justify-between items-center p-2 rounded hover:bg-gray-100 transition">
                    <Link href="#" className="text-gray-700 hover:text-orange-500">{cat.name}</Link>
                    <span className="px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Archives Widget */}
          <section className="overflow-hidden bg-white shadow-lg rounded-xl transition hover:shadow-xl">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h3 className="flex items-center gap-2">
                <Calendar size={18} /> ARCHIVES
              </h3>
            </div>
            <div className="p-6">
              <ul>
                {archives.map((archive, idx) => (
                  <li key={idx} className="flex justify-between items-center p-2 rounded hover:bg-gray-100 transition">
                    <Link href="#" className="text-gray-700 hover:text-orange-500">{archive.month}</Link>
                    <span className="px-2 py-1 text-xs font-bold text-gray-700 bg-gray-200 rounded">{archive.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact Widget */}
          <section className="text-center overflow-hidden bg-white shadow-lg rounded-xl transition hover:shadow-xl">
            <div className="px-6 py-4 text-white bg-gray-800">
              <h3>NEED HELP?</h3>
            </div>
            <div className="p-6">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 transition hover:scale-110">
                <Phone size={32} className="text-orange-500" />
              </div>
              <h3 className="text-blue-800 mb-4 text-xl font-bold">Call Us For Service</h3>
              <p className="mb-6 text-2xl font-bold">+91 99993 39265</p>
              <Link href="/contact" className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg">
                CONTACT SUPPORT
              </Link>
            </div>
          </section>
        </aside>
        
      </div>
      {/* Internal Links Section */}
                <section className="py-12 bg-gray-50">
                  <div className="container px-4 mx-auto">
                    <div className="grid gap-8 lg:grid-cols-2">
                      <InternalLinks
                        category="products"
                        title="Related Products"
                        maxLinks={4}
                        currentPage="/products/boom-barrier"
                      />
                      <InternalLinks
                        category="services"
                        title="Our Services"
                        maxLinks={4}
                        currentPage="/products/boom-barrier"
                      />
                    </div>
                  </div>
                </section>
    </main>
  );
};

export default Blog;
