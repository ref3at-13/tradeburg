export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/logo.png" alt="Tradeburg Logo" className="h-10" />
          </a>
          <nav className="space-x-4 hidden md:block">
            <a href="/#about" className="hover:text-blue-600">About</a>
            <a href="/#services" className="hover:text-blue-600">Services</a>
            <a href="/#locations" className="hover:text-blue-600">Locations</a>
            <a href="/#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p>We at <strong>Tradeburg GmbH</strong> take the protection of your personal data seriously and comply with the General Data Protection Regulation (GDPR).</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Data Controller</h2>
        <p>Tradeburg GmbH<br />Registered HQ: Krefeld, Germany<br />Email: info@tradeburg.de</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. Collection and Processing of Personal Data</h2>
        <p>We collect personal data (such as name, email, phone number) only when you provide it voluntarily, e.g., via our contact form or email. This data is used exclusively for responding to your inquiries and business communication.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Legal Basis</h2>
        <p>The processing of your data is based on Art. 6 para. 1 lit. b GDPR (contract performance) and Art. 6 para. 1 lit. f GDPR (legitimate interest in responding to inquiries).</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
        <p>Your data will not be transferred to third parties unless required by law or necessary to fulfill a contract with you.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">5. Storage Period</h2>
        <p>We store your data only as long as necessary to fulfill the purposes outlined here or as required by legal retention obligations.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p>You have the right to access, rectify, delete, restrict processing, and request data portability under GDPR. You also have the right to lodge a complaint with a supervisory authority.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact</h2>
        <p>If you have any questions about this Privacy Policy or the processing of your personal data, please contact us at info@tradeburg.de.</p>
      </main>

      {/* Footer */}
      <footer className="bg-[#1755BF] text-white py-10 px-12 mt-12">
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
              <li><a href="/#about" className="hover:underline">About</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#locations" className="hover:underline">Locations</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
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
        <div className="text-center text-sm text-white mt-8 space-x-2">
          <a href="/impressum" className="hover:underline">Impressum</a>
          <span>|</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="text-center text-sm text-white mt-2">
          © {new Date().getFullYear()} Tradeburg. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
