// Tradeburg Landing Page
// Framework: Next.js with Tailwind CSS
// Contact form sends email via Formspree to info@tradeburg.de

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Tradeburg Logo" className="h-12" />
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold">Your Business Partner between Europe and the Arab World</h1>
        <p className="text-xl mt-4">Connecting markets, cultures, and opportunities.</p>
        <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 rounded hover:bg-gray-100">Get Started Today</a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Tradeburg</h2>
        <p className="mb-4">Tradeburg is founded by partners from Germany and Egypt who have lived and worked across both regions, bringing unparalleled cultural understanding and business expertise.</p>
        <p>We aim to grow opportunities in both directions between Europe and the Arab world by building trusted partnerships and providing strategic market access.</p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Market Analysis & Entry</h3>
            <p>We provide strategic research and entry planning for expansion into new territories.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Business Setup</h3>
            <p>Support with incorporation, legal requirements, and local regulations.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Partnership Development</h3>
            <p>Connecting you with agents, distributors, and partners in Europe and the Arab world.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form action="https://formspree.io/f/mldndgan" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name *</label>
            <input type="text" id="name" name="name" required className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email *</label>
            <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
            <input type="text" id="phone" name="phone" className="w-full border border-gray-300 p-2 rounded" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message *</label>
            <textarea id="message" name="message" required rows="4" className="w-full border border-gray-300 p-2 rounded" onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2024 Tradeburg. All rights reserved.</p>
      </footer>
    </div>
  );
}
