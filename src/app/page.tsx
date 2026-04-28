'use client';
import { useState } from 'react'
import { MapPin, Sparkles, Trophy, Mail, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600 opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Schluss mit Urlaubsstress und endlosem Suchen
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            BLT Borkum: Deine persönliche Insel-App mit KI-Concierge, Gamification und allen Tipps in einer Hand
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition text-lg"
            >
              {submitted ? 'Gesendet!' : 'Demo anfragen'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Kennst du diese Probleme im Urlaub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Suche-Anstrengung</h3>
              <p className="text-gray-600">
                Stundenlang Webseiten durchforsten, veraltete PDFs herunterladen – nur um die Öffnungszeiten vom Thalasso-Bad zu finden
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Reizüberflutung</h3>
              <p className="text-gray-600">
                100+ Restaurants, Dutzende Aktivitäten – wo anfangen? Keine personalisierten Empfehlungen für dich und deine Familie
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Aktivitätsplanung</h3>
              <p className="text-gray-600">
                Tide-Zeiten, Wetter, Events – alles in verschiedenen Apps verstreut. Kein intelligenter Tagesplan, der sich anpasst
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Die Lösung: Alles in einer App
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Während die alte Kurkarten-App nur digitale Tickets bietet, macht BLT Borkum deinen Urlaub zum Erlebnis
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">KI-Concierge</h3>
                    <p className="text-gray-600">Frag einfach: "Was kann ich heute bei Regen mit Kindern machen?" – du bekommst sofort passende Vorschläge</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Live Inselkarte</h3>
                    <p className="text-gray-600">Tide-Zeiten, Vogelbrutgebiete, Wetter – alles in Echtzeit auf einer Karte mit Navigation</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Loyalty & Gamification</h3>
                    <p className="text-gray-600">Sammle Punkte bei jedem Besuch, schalte Badges frei und erhalte exklusive Rabatte für Wiederkehrer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-teal-700 rounded-2xl p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Vorher vs. Nachher</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✕</div>
                  <span className="line-through opacity-75">5 Apps installiert</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✓</div>
                  <span className="font-semibold">Eine App für alles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✕</div>
                  <span className="line-through opacity-75">Stunden Recherche</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✓</div>
                  <span className="font-semibold">KI antwortet in Sekunden</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✕</div>
                  <span className="line-through opacity-75">Unorganisierte Tage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 text-sm">✓</div>
                  <span className="font-semibold">Smarter Tagesplan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Was sagen Urlauber?</h2>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6 italic">
              "Endlich kein Stress mehr! Die KI hat uns jeden Tag perfekte Aktivitäten vorgeschlagen – genau passend zum Wetter und den Kindern. Und die Punkte für Wiederkehrer sind ein toller Bonus!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Familie Müller</p>
                <p className="text-sm text-gray-600">Stammgast seit 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Für Destinationen & Touristiker</h2>
          <p className="text-center text-xl text-gray-300 mb-16">Steigere Gästezufriedenheit und Wiederkehrer-Quote</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-2xl border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">4.900€ <span className="text-xl font-normal text-gray-400">/Jahr</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Bis 50.000 Gäste/Jahr</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Basis-KI-Concierge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Inselkarte & Loyalty</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Standard-Support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition">
                Anfragen
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-teal-700 p-8 rounded-2xl border-2 border-green-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                EMPFOHLEN
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-6">8.900€ <span className="text-xl font-normal text-gray-300">/Jahr</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Unbegrenzte Gäste</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Premium KI + Personalisierung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>B2B-Partner-Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>White-Label-Branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span>Priority-Support 24/7</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition text-gray-900">
                Jetzt starten
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Bereit für die Zukunft deiner Destination?</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {submitted ? 'Gesendet!' : 'Kontakt'}
            </button>
          </form>
          <p className="text-gray-500 text-sm">Powered by Trehl AI</p>
        </div>
      </footer>
    </main>
  )
}