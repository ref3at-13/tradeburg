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
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares.</li>
          <li><strong>Company</strong> ("the Company", "We", "Us" or "Our") refers to Tradeburg GmbH, Nassauerring 265, 47803 Krefeld, Germany.</li>
          <li><strong>Cookies</strong> are small files placed on Your device by a website.</li>
          <li><strong>Country</strong> refers to: Baden-Württemberg, Germany.</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically, such as duration of a page visit.</li>
          <li>
            <strong>Website</strong> refers to Tradeburg.de, accessible from{' '}
            <a href="https://tradeburg.de/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://tradeburg.de/
            </a>
          </li>
          <li><strong>You</strong> means the individual accessing or using the Service, or the entity on behalf of which such individual is accessing or using the Service.</li>
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
        <p>Usage Data is collected automatically when using the Service (e.g. IP address, browser type, pages visited). When You access the Service by mobile device, We may collect additional diagnostic data.</p>

        <h4 className="text-lg font-semibold mt-4">Tracking Technologies and Cookies</h4>
        <p>We use Cookies and similar tracking technologies to track activity on Our Service and store certain information.</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Cookies</strong>: small files placed on Your Device.</li>
          <li><strong>Web Beacons</strong>: small electronic files used to count users who visit pages or open emails.</li>
        </ul>
        <p>Cookies can be "Persistent" or "Session" Cookies. Persistent remain after you go offline; Session Cookies are deleted when you close your browser.</p>

        <h4 className="text-lg font-semibold mt-4">Use of Your Personal Data</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>To provide and maintain our Service</strong>, including monitoring usage.</li>
          <li><strong>To manage Your Account:</strong> to manage Your registration and access.</li>
          <li><strong>For contract performance:</strong> compliance with purchase or service contracts.</li>
          <li><strong>To contact You:</strong> via email, phone, SMS or push notifications.</li>
          <li><strong>To provide news and offers</strong> about goods and services.</li>
          <li><strong>To manage requests</strong> you send to us.</li>
          <li><strong>For business transfers:</strong> such as merger or acquisition.</li>
          <li><strong>For other purposes</strong>: data analysis, usage trends, improving Service.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Disclosure of Your Personal Data</h4>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Service Providers:</strong> to monitor and analyze use.</li>
          <li><strong>Business transfers:</strong> merger, sale, financing negotiations.</li>
          <li><strong>Affiliates:</strong> parent and subsidiary companies.</li>
          <li><strong>Business partners:</strong> for offers and promotions.</li>
          <li><strong>Other users:</strong> when you share in public areas.</li>
          <li><strong>With Your consent</strong>: for any other purpose.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Retention of Your Personal Data</h4>
        <p>We retain Your data only as long as necessary to fulfill the purposes in this Privacy Policy or as required by law.</p>

        <h4 className="text-lg font-semibold mt-4">Transfer of Your Personal Data</h4>
        <p>Data may be processed at Our operating offices or by third parties. Transfers are protected by appropriate safeguards.</p>

        <h4 className="text-lg font-semibold mt-4">Delete Your Personal Data</h4>
        <p>You have the right to delete or request deletion of Your Personal Data. You may update, amend, or delete Your information via your Account or by contacting us.</p>

        <h4 className="text-lg font-semibold mt-4">Disclosure in Legal and Safety Cases</h4>
        <p>We may disclose data to comply with legal obligations, protect rights, prevent wrongdoing, or ensure user safety.</p>

        <h4 className="text-lg font-semibold mt-4">Security of Your Personal Data</h4>
        <p>We use commercially acceptable means to protect Your Personal Data but cannot guarantee absolute security.</p>

        <h2 className="text-2xl font-semibold mt-8">Children's Privacy</h2>
        <p>Our Service does not address anyone under 13. We do not knowingly collect data from children under 13.</p>

        <h2 className="text-2xl font-semibold mt-8">Links to Other Websites</h2>
        <p>Our Service may contain links to third-party sites with their own privacy policies.</p>

        <h2 className="text-2xl font-semibold mt-8">Changes to this Privacy Policy</h2>
        <p>We may update this policy by posting the new version and updating the "Last updated" date.</p>

        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>If you have any questions, contact us at info@tradeburg.de.</p>
      </main>

      {/* Footer */}
      <footer className="bg-[#1755BF] text-white py-10 px-12 mt-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <img src="/Tradeburg Logo White Vertical.png" alt="Tradeburg Logo" className="h-16 mb-4 mx-auto md:mx-0" />
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
              <li><a href="/impressum" className="hover:underline">Legal Notice</a></li>
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
