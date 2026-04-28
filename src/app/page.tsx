```typescript
import { useState } from 'react'
import { MapPin, Sparkles, Trophy, MessageCircle, Search, Zap, Heart, Menu, X, Mail, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-lg"></div>
              <span className="font-bold text-xl text-[#1B4F72]">BLT Borkum</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#problem" className="text-gray-600 hover:text-[#1B4F72] transition-colors">Problem</a>
              <a href="#loesung" className="text-gray-600 hover:text-[#1B4F72] transition-colors">Lösung</a>
              <a href="#features" className="text-gray-600 hover:text-[#1B4F72] transition-colors">Features</a>
              <a href="#preise" className="text-gray-600 hover:text-[#1B4F72] transition-colors">Preise</a>
              <a href="#kontakt" className="bg-[#27AE60] text-white px-6 py-2 rounded-full hover:bg-[#229954] transition-colors">
                Demo anfragen
              </a>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#problem" className="block text-gray-600 hover:text-[#1B4F72]">Problem</a>
              <a href="#loesung" className="block text-gray-600 hover:text-[#1B4F72]">Lösung</a>
              <a href="#features" className="block text-gray-600 hover:text-[#1B4F72]">Features</a>
              <a href="#preise" className="block text-gray-600 hover:text-[#1B4F72]">Preise</a>
              <a href="#kontakt" className="block bg-[#27AE60] text-white px-6 py-2 rounded-full text-center">
                Demo anfragen
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60] opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#27AE60] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1B4F72] rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#27AE60]/10 text-[#27AE60] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏝️ Die Zukunft des Insel-Tourismus
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Nie wieder verpasste <span className="text-[#1B4F72]">Urlaubsmomente</span> auf Borkum
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ihre Gäste verlieren sich in unübersichtlichen Infos und verpassten Gezeiten. Unsere KI-gestützte App verwandelt Planungsstress in personalisierte Urlaubsfreude – mit 3x höherer Wiederkehrquote.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre.email@borkum-tourismus.de" 
                  required
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#1B4F72] transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-[#27AE60] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#229954] transition-all hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {submitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Gesendet!
                    </>
                  ) : (
                    <>
                      Demo anfordern
                      <Zap className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-sm text-gray-500">
                ✓ 14 Tage kostenlos testen &nbsp;·&nbsp; ✓ DSGVO-konform &nbsp;·&nbsp; ✓ Keine Kreditkarte nötig
              </p>
            </div>
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60] rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-[#27AE60]" />
                    <span className="font-semibold text-gray-900">Heute für Sie empfohlen</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Perfektes Wetter für Wattwanderung um 14:30 Uhr – Niedrigwasser ideal!</p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#27AE60]/10 text-[#27AE60] px-3 py-2 rounded-lg text-xs font-medium text-center">
                      +50 Punkte
                    </div>
                    <div className="flex-1 bg-[#1B4F72]/10 text-[#1B4F72] px-3 py-2 rounded-lg text-xs font-medium text-center">
                      Route starten
                    </div>
                  </div>
                </div>
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[#27AE60]" />
                  <span className="font-semibold text-sm">Level 7 · 2.340 Pkt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              3 versteckte Umsatzkiller im <span className="text-[#1B4F72]">Insel-Tourismus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ihre Gäste wollen entspannen – stattdessen kämpfen sie mit Zettelwirtschaft und verpassten Highlights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-red-500">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suche-Anstrengung</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gäste verlieren täglich 45+ Minuten mit dem Durchforsten von Flyern, Websites und Google Maps. Resultat: Frust statt Urlaubsfeeling.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-sm text-red-800 font-medium">💸 Kosten: 23% weniger Aktivitätsbuchungen</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-orange-500">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reizüberflutung</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                300+ Angebote ohne Priorisierung überfordern Gäste. Sie buchen "das Erstbeste" statt das Passende – schlechte Bewertungen vorprogrammiert.
              </p>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-sm text-orange-800 font-medium">📉 Folge: TripAdvisor-Score sinkt um 0,4 Sterne</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-yellow-500">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aktivitätsplanung</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gezeiten, Wetter, Öffnungszeiten – Gäste verpassen 60% der Highlights, weil sie nicht wissen, wann Was möglich ist. Loyalität? Fehlanzeige.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="text-sm text-yellow-800 font-medium">🔄 Effekt: Nur 12% Wiederkehr-Rate</p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#1B4F72]">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Die bisherige Lösung greift zu kurz</h4>
                <p className="text-gray-600">
                  KurkartenApp, Print-Reiseführer und touristinfo.de bieten statische Infos ohne Kontext. Kein Wunder, dass 67% der Gäste parallele Recherche betreiben müssen.
                </p>
              </div>
              <div className="bg-[#1B4F72]/5 px-6 py-4 rounded-xl border-2 border-[#1B4F72]/20">
                <p className="text-3xl font-bold text-[#1B4F72]">67%</p>
                <p className="text-sm text-gray-600">nutzen 3+ Tools parallel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loesung" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#27AE60]/10 text-[#27AE60] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ Die All-in-One-Lösung
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wie BLT Borkum <span className="text-[#27AE60]">Gästebindung neu definiert</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine native App, die Planungsstress eliminiert und aus Erstbesuchern treue Stammgäste macht
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Vorher: Fragmentiertes Chaos</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">KurkartenApp</p>
                    <p className="text-sm text-gray-600">Nur Rabatt-Codes, keine Empfehlungen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Print-Reiseführer</p>
                    <p className="text-sm text-gray-600">Veraltet ab Drucklegung, kein Echtzeit-Kontext</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">touristinfo.de</p>
                    <p className="text-sm text-gray-600">Desktop-optimiert, keine Personalisierung</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nachher: Ein intelligentes System</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-gradient-to-r from-[#27AE60]/10 to-[#1B4F72]/10 p-4 rounded-lg border-l-4 border-[#27AE60]">
                  <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">KI-Concierge</p>
                    <p className="text-sm text-gray-600">Personalisierte Vorschläge basierend auf Wetter, Gezeiten & Interessen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-[#27AE60]/10 to-[#1B4F72]/10 p-4 rounded-lg border-l-4 border-[#27AE60]">
                  <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Gamification-Layer</p>
                    <p className="text-sm text-gray-600">Punkte für Aktivitäten, Level-Ups, exklusive Badges → 3x höhere Engagement-Rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-[#27AE60]/10 to-[#1B4F72]/10 p-4 rounded-lg border-l-4 border-[#27AE60]">
                  <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hyperlokaler Kontext</p>
                    <p className="text-sm text-gray-600">Live-Integration: Tide-Zeiten, Vogelbrutgebiete, Event-Kalender</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gradient-to-r from-[#27AE60]/10 to-[#1B4F72]/10 p-4 rounded-lg border-l-4 border-[#27AE60]">
                  <div className="w-6 h-6 rounded-full bg-[#27AE60] flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Loyalty-Mechanik</p>
                    <p className="text-sm text-gray-600">Rabatte beim nächsten Besuch → messbar höhere Wiederkehr-Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#2874A6] p-8 rounded-2xl text-white">
              <p className="text-5xl font-bold mb-2">+187%</p>
              <p className="text-lg opacity-90">App-Nutzung vs. Website</p>
            </div>
            <div className="bg-gradient-to-br from-[#27AE60] to-[#229954] p-8 rounded-2xl text-white">
              <p className="text-5xl font-bold mb-2">3,2x</p>
              <p className="text-lg opacity-90">höhere Wiederkehr-Quote</p>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] p-8 rounded-2xl text-white">
              <p className="text-5xl font-bold mb-2">-68%</p>
              <p className="text-lg opacity-90">Support-Anfragen</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              4 Kern-Features, die den <span className="text-[#1B4F72]">Unterschied machen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologie, die funktioniert – ohne Ihre Gäste oder Ihr Team zu überfordern
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-16 h-16 bg-[#27AE60]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-[#27AE60]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">KI-Concierge mit Kontext-Awareness</h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Vergessen Sie generische "Top 10"-Listen. Unser KI-Modell analysiert in Echtzeit: Wetter, Tide-Zeiten, Vogelbrutgebiete, Event-Kalender, Gäste-Präferenzen und bisherige Aktivitäten.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Beispiel:</strong> "Morgen 14:30 Uhr perfekt für Wattwanderung – Niedrigwasser + 18°C"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Personalisierung:</strong> Familien-Routen vs. Natur-Fotografie-Spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Integration:</strong> Direct-Booking für Restaurants & Aktivitäten</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-[#27AE60]/20 to-[#1B4F72]/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#27AE60] to-[#229954] rounded-full"></div>
                      <div>
                        <p className="font-semibold text-sm">KI-Concierge</p>
                        <p className="text-xs text-gray-500">Jetzt aktiv</p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#1B4F72]/10 to-[#27AE60]/10 p-4 rounded-xl mb-3">
                      <p className="text-sm text-gray-700 mb-2">Basierend auf Ihrem Profil empfehle ich:</p>
                      <p className="font-semibold text-[#1B4F72]">🌊 Wattwanderung "Kleine Seehunde"</p>
                      <p className="text-xs text-gray-600 mt-1">Morgen 14:30 · Dauer 2h · Familien-freundlich</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-[#27AE60] text-white py-2 rounded-lg text-sm font-medium">
                        Buchen
                      </button>
                      <button className="px-4 border border-gray-200 rounded-lg">
                        ❤️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-[#1B4F72]/20 to-[#27AE60]/20 rounded-3xl p-8 flex items-center justify-center">
                  <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#1B4F72] to-[#27AE60] rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Trophy className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900">Level 7</p>
                      <p className="text-sm text-gray-600">Borkum-Kenner</p>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Gesammelte Punkte</span>
                        <span className="font-bold text-[#27AE60]">2.340</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#27AE60] to-[#1B4F72] h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 text-center">660 Punkte bis Level 8</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#27AE60]/10 p-2 rounded-lg text-center">
                        <p className="text-lg">🏖️</p>
                        <p className="text-xs font-medium">Strand-Fan</p>
                      </div>
                      <div className="bg-[#1B4F72]/10 p-2 rounded-lg text-center">
                        <p className="text-lg">🚴</p>
                        <p className="text-xs