export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/Tradeburg Logo.png" alt="Tradeburg Logo" className="h-10" />
          </a>
          <nav className="space-x-4 hidden md:block">
            <a href="/#about" className="hover:text-blue-600">About</a>
            <a href="/#services" className="hover:text-blue-600">Services</a>
            <a href="/#locations" className="hover:text-blue-600">Locations</a>
            <a href="/#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8 space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Last updated: August 03, 2025</p>
        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
          <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Privacy Policy Generator
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-semibold mt-4">Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
          <li><strong>Company</strong> (referred to as "the Company", "We", "Us" or "Our") refers to Tradeburg GmbH, Nassauerring 265, 47803 Krefeld, Germany.</li>
          <li><strong>Cookies</strong> are small files that are placed on Your device by a website.</li>
          <li><strong>Country</strong> refers to: Baden-Württemberg, Germany.</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically from the Service infrastructure (e.g. page visit duration).</li>
          <li>
            <strong>Website</strong> refers to Tradeburg.de, accessible from{' '}
            <a href="https://tradeburg.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://tradeburg.de/
            </a>
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the company on behalf of which such individual is accessing or using the Service.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>
        <h4 className="text-lg font-semibold mt-2">Personal Data</h4>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information such as:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4">Usage Data</h4>
        <p>Usage Data is collected automatically when using the Service (e.g. IP address, browser type, pages visited).</p>
        <h4 className="text-lg font-semibold mt-4">Tracking Technologies and Cookies</h4>
        <p>We use Cookies and similar tracking technologies to track activity on Our Service and store certain information.</p>

        {/* Additional sections would continue here... */}
      </main>

      {/* Footer */}
      <footer className="bg-[#1755BF] text-white py-10 px-12 mt-12">
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
              <li><a href="/#about" className="hover:underline">About</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#locations" className="hover:underline">Locations</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Contact</h4>
            <p className="text-sm text-gray-200">
              Bötzinger Str. 46<br />
              OfficePlus Building<br />
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
