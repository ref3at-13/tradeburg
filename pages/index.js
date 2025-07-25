// Tradeburg Landing Page
// Framework: Next.js with Tailwind CSS

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
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
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-left md:text-center">
            Your Business Partner<br />
            across Europe and the Arab World
          </h1>
          <p className="text-xl mt-4 md:text-center text-left">
            Connecting markets, cultures, and opportunities across continents<br />
            with deep local expertise and trusted partnerships.
          </p>
          <div className="mt-6 md:text-center text-left">
            <a href="#contact" className="inline-block px-6 py-3 bg-white text-blue-700 rounded hover:bg-gray-100">Get Started Today</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">About Tradeburg</h2>
        <p className="text-center text-lg mb-12">
          Founded by partners from Germany and Egypt who have lived and worked across both regions,<br />
          bringing unparalleled cultural understanding and business expertise.
        </p>
        {/* Our Mission section remains */}
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Services</h2>
          <p className="text-center text-lg mb-12">Comprehensive solutions for international trade and business expansion.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cards remain unchanged */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1755BF] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src="/Tradeburg Logo White Vertical.png" alt="Tradeburg Logo" className="h-20 mb-4 mx-auto md:mx-0" />
            <p className="text-sm text-gray-200">
              Bridging Europe and the Arab World<br />
              through trusted partnerships and deep local expertise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#locations" className="hover:underline">Locations</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="/impressum" className="hover:underline">Impressum</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <p className="text-sm text-gray-200">
              info@tradeburg.de<br />
              Krefeld, Germany<br />
              Cairo, Egypt
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-white mt-8">
          © {new Date().getFullYear()} Tradeburg. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
