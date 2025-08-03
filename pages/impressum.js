export default function Impressum() {
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

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Imprint</h1>
        <p><strong>Tradeburg GmbH</strong></p>
        <p>Address: Nassauerring 265, 47803 Krefeld, Germany</p>
        <p>Email: info@tradeburg.de</p>

        <h2 className="text-1xl font-semibold mt-6 mb-2">Represented by:</h2>
        <p>Managing Director: Ashraf Attia</p>

        <h2 className="text-1xl font-semibold mt-6 mb-2">Commercial Register Entry:</h2>
        <p>Register Court: Amtsgericht Krefeld</p>
        <p>Register Number: HRB 19847</p>

        <h2 className="text-1xl font-semibold mt-6 mb-2">VAT ID:</h2>
        <p>VAT Identification Number: DE 306572402</p>

        <h2 className="text-1xl font-semibold mt-6 mb-2">Disclaimer:</h2>
        <p>
          Despite careful content control, we assume no liability for the content of external links.
          The operators of the linked pages are solely responsible for their content.
        </p>

        <h2 className="text-1xl font-semibold mt-6 mb-2">Copyright:</h2>
        <p>
          All content and works on this website are subject to German copyright law.
          Third-party contributions are identified as such. Duplication, editing, distribution,
          and any kind of exploitation outside the limits of copyright law require the written
          consent of the respective author or creator.
        </p>
      </main>

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
              <li><a href="/#about" className="hover:underline">About</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#locations" className="hover:underline">Locations</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
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
