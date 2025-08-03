// Tradeburg Landing Page
// Framework: Next.js with Tailwind CSS

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/Tradeburg Logo.png" alt="Tradeburg Logo" className="h-10" />
          </a>
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#locations" className="hover:text-blue-600">Locations</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <div className="max-w-7xl mx-auto px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-left md:text-center">
            Your Business Partner<br />
            across Europe and the Arab World
          </h1>
          <p className="text-xl mt-4 md:text-center text-left">
            Connecting markets, cultures, and opportunities across continents<br />
            with deep local expertise and trusted partnerships.
          </p>
          <div className="mt-6 md:text-center text-left">
            <a href="#contact" className="inline-block px-12 py-3 bg-white text-blue-700 rounded hover:bg-gray-100">
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Tradeburg</h2>
        <p className="text-center text-lg mb-12">
          Founded by partners from Germany and Egypt who have lived and worked across both regions,<br />
          bringing unparalleled cultural understanding and business expertise.
        </p>
        <h3 className="text-2xl font-semibold mb-6 text-left">Our Mission</h3>
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <p className="text-gray-700 mb-4">
              Our main goal is to find and grow business opportunities in both directions between Europe and the Arab world. We leverage our deep understanding of both cultures and business environments to create meaningful, lasting partnerships.
            </p>
            <p className="text-gray-700">
              Through our work, we hope to contribute to promoting better understanding, respect, and harmony between these dynamic regions, while driving economic growth and innovation.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white md:col-span-3 flex flex-col justify-start">
            <img src="/Partnership.png" alt="Cross-Cultural Expertise" className="h-14 w-14 mb-4" />
            <h4 className="font-semibold mb-1">Cross-Cultural Expertise</h4>
            <p className="text-sm text-gray-600">Deep understanding of European and Arab markets</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white md:col-span-3 flex flex-col justify-start">
            <img src="/Culture.png" alt="Trusted Partnerships" className="h-14 w-14 mb-4" />
            <h4 className="font-semibold mb-1">Trusted Partnerships</h4>
            <p className="text-sm text-gray-600">Building lasting business relationships</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-center text-lg mb-12">
            Comprehensive solutions for international trade and business expansion.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow flex flex-col">
              <img src="/Market.png" alt="Market Analysis & Entry" className="h-14 w-14 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Market Analysis & Entry</h3>
              <p>Strategic market research and entry planning for successful expansion into new territories.</p>
            </div>
            <div className="p-6 bg-white rounded shadow flex flex-col">
              <img src="/Setup.png" alt="Business Setup" className="h-14 w-14 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Business Setup</h3>
              <p>Support with company incorporation, understanding legal requirements, and local regulations.</p>
            </div>
            <div className="p-6 bg-white rounded shadow flex flex-col">
              <img src="/PartnershipDev.png" alt="Partnership Development" className="h-14 w-14 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Partnership Development</h3>
              <p>Finding and developing relationships with agents, distributors, and strategic partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 px-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Locations</h2>
        <p className="text-center text-lg mb-12">Strategic presence in key markets for maximum impact.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <img src="/Location.png" alt="Location Icon" className="h-14 w-14 mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Germany Headquarters</h3>
            <p className="text-sm text-gray-600">
              Bötzinger Str. 46<br />
              OfficePlus Building<br />
              79111 Freiburg
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white">
            <img src="/Location.png" alt="Location Icon" className="h-14 w-14 mb-2" />
            <h3 className="text-2xl font-semibold mb-2">Egypt Office</h3>
            <p className="text-sm text-gray-600">Egypt: Maadi, Cairo</p>
          </div>
        </div>
        <p className="mt-12 text-center text-lg">
          Working on the ground in both regions allows us to build trust, understand local customs, and respond quickly to our clients' needs while fostering genuine cross-cultural business relationships.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20 px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-center text-lg mb-12">Ready to explore new opportunities? Let's start the conversation.</p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message *</label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-12 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1755BF] text-white py-10 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <img src="/Tradeburg Logo White.png" alt="Tradeburg Logo" className="h-16 mb-4 mx-auto md:mx-0" />
            <p className="text-sm text-gray-200">
              Bridging Europe & the Arab World<br />
              One Business Partnership at a Time
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#locations" className="hover:underline">Locations</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <p className="text-sm text-gray-200">
              Germany: Bötzinger Str. 46<br />
              (OfficePlus Building)<br />
              79111 Freiburg
            </p>
            <p className="mt-4 text-sm text-gray-200">Egypt: Maadi, Cairo</p>
            <p className="mt-4 text-sm text-gray-200">Email: info@tradeburg.de</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/impressum" className="hover:underline">Imprint</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-white mt-8">
          © 2025 Tradeburg. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
