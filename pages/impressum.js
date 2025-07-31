export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
          <a href="/">
            <img src="/logo.png" alt="Tradeburg Logo" className="h-10" />
          </a>
          <nav className="space-x-4 hidden md:block">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/impressum" className="hover:text-blue-600">Impressum</a>
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>
        <p><strong>Tradeburg GmbH</strong></p>
        <p>Registered HQ: Krefeld, Germany</p>
        <p>Office: Freiburg im Breisgau, Germany</p>
        <p>Email: info@tradeburg.de</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Vertreten durch:</h2>
        <p>Geschäftsführer: [Name of Managing Director]</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Registereintrag:</h2>
        <p>Registergericht: Amtsgericht [City]</p>
        <p>Registernummer: HRB [Number]</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Umsatzsteuer-ID:</h2>
        <p>USt-IdNr.: DE [Number]</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Haftungsausschluss:</h2>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
          Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Urheberrecht:</h2>
        <p>
          Alle Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.
          Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
        </p>
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
              <li><a href="/" className="hover:underline">Home</a></li>
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
