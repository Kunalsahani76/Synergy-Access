"use client";

import { MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";

const FloatingContacts = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-center space-y-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919999339265"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-green-600"
        title="Chat with us on WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <a
  href="mailto:business@synergy-access.com"
  target="_self"
  className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-red-600 cursor-pointer"
  title="Send us an email"
  aria-label="Email"
>
  <Mail className="h-6 w-6" />
</a>


      {/* Phone */}
      <a
        href="tel:+919999339265"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-blue-600"
        title="Call us now"
        aria-label="Phone"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-gray-900"
        title="Scroll to top"
        aria-label="Scroll to top"
        type="button"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FloatingContacts;