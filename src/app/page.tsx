'use client';
import { useState } from 'react'
import { MapPin, Sparkles, Gift, Menu, X, Mail, CheckCircle, Search, Zap, Heart } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#1B4F72]" />
            <span className="font-bold text-xl text-[#1B4F72]">BLT Borkum</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#problem" className="hover:text-[#1B4F72]">Problem</a>
            <a href="#features" className="hover:text-[#1B4F72]">Features</a>
            <a href="#pricing" className="hover:text-[#1B4F72]">Preise</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60]"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Von Reizüberflutung zur perfekten Urlaubs-Routine
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Die intelligente Gäste-App mit KI-Concierge, die Ihre Urlauber begeistert und zur Wiederkehr motiviert.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre.email@borkum.de"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
              />
              <button type="submit" className="px-8 py-4 bg-[#27AE60] hover:bg-[#229954] text-white font-semibold rounded-lg transition whitespace-nowrap">
                Demo anfordern
              </button>
            </form>
            {submitted && (
              <div className="mt-4 flex items-center gap-2 text-[#27AE60] bg-white px-4 py-2 rounded-lg w-fit">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium text-gray-900">Vielen Dank! Wir melden uns binnen 24h.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            3 Gründe, warum Urlauber Ihre Insel gestresst verlassen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Print-Reiseführer und touristinfo.de schaffen das Problem nicht mehr ab.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Search className="w-12 h-12 text-[#E74C3C] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suche-Anstrengung</h3>
              <p className="text-gray-600">
                Gäste verlieren täglich 45+ Minuten mit der Suche nach Restaurants, Tide-Zeiten und Events in fragmentierten Quellen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-12 h-12 text-[#E74C3C] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reizüberflutung</h3>
              <p className="text-gray-600">
                300+ Aktivitäten ohne Filter: Familien mit Kleinkindern bekommen dieselben Tipps wie Rentner-Paare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Heart className="w-12 h-12 text-[#E74C3C] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Keine Bindung</h3>
              <p className="text-gray-600">
                Null Wiederkehr-Anreize: Nach dem Urlaub verschwindet die Beziehung zur Destination im Nichts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Die Lösung: Intelligente Gäste-App statt digitale Broschüre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BLT Borkum kombiniert KI-Empfehlungen, Gamification und Loyalty zu einem System, das Ihre Gäste täglich nutzen wollen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#27AE60] rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">KI-Concierge mit Kontext</h3>
                    <p className="text-gray-600">
                      "Was kann ich mit 2 Kindern bei Regen machen?" → Sofort-Antwort basierend auf Wetter, Tide und Alter.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#27AE60] rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Insel-Challenges & Punkte</h3>
                    <p className="text-gray-600">
                      "5 versteckte Orte entdecken" → Badges sammeln → 10% Rabatt bei Partner-Restaurants.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#27AE60] rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Automatische Wiederkehr-Anreize</h3>
                    <p className="text-gray-600">
                      Jeder 3. Besuch = Gratis-Wellnesstag. Push-Benachrichtigung 8 Wochen nach Abreise mit persönlichem Angebot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">vs. Kurkarten-App</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Personalisierte Empfehlungen statt statischer Liste</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Gamification für längere Aufenthalte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Loyalty-System für Wiederkehrer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Echtzeit-Daten für Partner-Hotels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Features, die Gäste täglich öffnen lassen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B4F72] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">KI-Chat mit Inselwissen</h3>
              <p className="text-gray-600">
                Trainiert auf Tide-Zeiten, Vogelbrutgebiete, Restaurant-Menüs. Antwortet in Sekunden statt Google-Marathon.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#27AE60] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Interaktive Inselkarte</h3>
              <p className="text-gray-600">
                AR-Wegweiser zu versteckten Spots. Offline-Modus für Strand ohne Netz. Echtzeit-Auslastung von Hotspots.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1B4F72] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Loyalty & Gamification</h3>
              <p className="text-gray-600">
                Punkte für Check-ins, Reviews, Challenges. Einlösbar bei 50+ Partnern. Automatische Wiederkehr-Kampagnen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Das sagen frühe Tester
          </h2>
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-full"></div>
              <div>
                <div className="font-bold text-lg text-gray-900">Sandra M.</div>
                <div className="text-gray-600">Mutter von 2 Kindern, 4. Besuch Borkum</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Endlich keine 20-Minuten-Diskussionen mehr, was wir heute machen. Die App schlägt morgens automatisch 3 Dinge vor, die zu unserem Wetter und den Kindern passen. Und die Challenge 'Seehund-Spots finden' hat uns an Orte gebracht, die wir sonst nie entdeckt hätten."
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Transparente Preise für jede Destinationsgröße
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Setup-Fee einmalig, dann monatliche Lizenz. Keine versteckten Kosten.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
              <div className="text-4xl font-bold mb-6 text-[#1B4F72]">
                €1.200<span className="text-lg font-normal text-gray-600">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Basis KI-Concierge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Interaktive Karte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Bis 50.000 App-Nutzer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Standard Support</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-[#1B4F72] text-[#1B4F72] font-semibold rounded-lg hover:bg-[#1B4F72] hover:text-white transition">
                Beratung anfragen
              </button>
            </div>
            <div className="bg-[#1B4F72] p-8 rounded-xl shadow-lg text-white relative">
              <div className="absolute top-0 right-6 bg-[#27AE60] text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
                Empfohlen
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-4xl font-bold mb-6">
                €2.800<span className="text-lg font-normal text-gray-200">/Monat</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span>Alles aus Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span>Gamification & Loyalty</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span>Partner-Dashboard für Hotels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span>Unlimited Nutzer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  <span>Priority Support & Onboarding</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#27AE60] text-white font-semibold rounded-lg hover:bg-[#229954] transition">
                Jetzt starten
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1B4F72] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6" />
                <span className="font-bold text-xl">BLT Borkum</span>
              </div>
              <p className="text-gray-300 mb-6">
                Die intelligente Gäste-App, die aus Erst-Besuchern loyale Wiederkehrer macht.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Demo vereinbaren</h3>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.de"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button type="submit" className="px-6 py-3 bg-[#27AE60] hover:bg-[#229954] font-semibold rounded-lg transition">
                  Absenden
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2024 BLT Borkum. Alle Rechte vorbehalten.</div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Powered by Trehl AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}