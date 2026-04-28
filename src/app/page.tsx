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
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1B4F72]">BLT Borkum</div>
          <a href="#contact" className="text-[#1B4F72] hover:text-[#27AE60] transition">Kontakt</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Schluss mit Suchstress im Urlaub</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Die intelligente Gäste-App für Borkum – mit KI-Concierge, Gamification und Loyalty-Programm</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ihre@email.de" required className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button type="submit" className="bg-[#27AE60] hover:bg-[#229954] text-white px-6 py-3 rounded-lg font-semibold transition">{submitted ? 'Gesendet!' : 'Demo anfragen'}</button>
          </form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1B4F72]">Diese Probleme kennen Ihre Gäste</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Endlose Suche</h3>
            <p className="text-gray-600">Urlauber verbringen Stunden mit Recherche statt Entspannung – zwischen Print-Flyern und fragmentierten Websites</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Reizüberflutung</h3>
            <p className="text-gray-600">300+ Aktivitäten ohne Filter – welches Restaurant? Welcher Strand bei Ostwind? Zu viele Optionen, keine Orientierung</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Planungsfrust</h3>
            <p className="text-gray-600">Tide verpasst, Führung ausgebucht, falsches Wetter eingeplant – spontane Umplanung ist mühsam ohne smarte Tools</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1B4F72] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Warum die alte Kurkarten-App nicht reicht</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#27AE60]">BLT Borkum App</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Check className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" /><span>KI-Concierge beantwortet Fragen in Echtzeit (Wetter, Gezeiten, Events)</span></li>
                <li className="flex items-start gap-3"><Check className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" /><span>Gamification mit Insel-Challenges und Punktesammeln</span></li>
                <li className="flex items-start gap-3"><Check className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" /><span>Loyalty-Programm für Wiederkehrer mit Partner-Rabatten</span></li>
                <li className="flex items-start gap-3"><Check className="w-6 h-6 text-[#27AE60] flex-shrink-0 mt-1" /><span>Hyperlokale Empfehlungen nach Kontext (Wind, Kinderalter, Interessen)</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 opacity-60">Alte Kurkarten-App</h3>
              <ul className="space-y-3 opacity-70">
                <li className="flex items-start gap-3"><span className="text-xl">❌</span><span>Statische Infos ohne Personalisierung</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">❌</span><span>Keine Bindungsmechanik – Gäste laden nach Abreise ab</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">❌</span><span>Kein Kontext (Wetter/Tide ignoriert)</span></li>
                <li className="flex items-start gap-3"><span className="text-xl">❌</span><span>Keine Daten für B2B-Partner</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1B4F72]">Features, die Gäste lieben</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">KI-Concierge</h3>
            <p className="text-gray-600">„Wo kann ich bei Regen mit Kindern hin?" – Antwort in 3 Sekunden, personalisiert nach Wetter, Tide und Präferenzen</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Interaktive Inselkarte</h3>
            <p className="text-gray-600">Alle POIs, Echtzeit-Auslastung an Stränden, Offline-Modus für Funklöcher – mit AR-Navigation zu Seehundbänken</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Gamification & Loyalty</h3>
            <p className="text-gray-600">Insel-Challenges freischalten, Punkte sammeln, Rabatte bei lokalen Partnern einlösen – Wiederkehr-Anreiz durch Level-System</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1B4F72]">Was Gäste sagen</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center text-white text-2xl font-bold">SM</div>
              <div>
                <div className="font-bold text-gray-900">Sandra M., 34</div>
                <div className="text-gray-600">Familie mit 2 Kindern, Wiederkehrer</div>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">"Endlich keine Diskussionen mehr, was wir machen! Die App schlägt vormittags Wattwanderung vor (weil Niedrigwasser) und nachmittags Indoor-Spielplatz wegen Regen. Die Kinder lieben die Insel-Challenges – letztes Jahr haben wir alle 12 Leuchtturm-Stempel gesammelt. Wir kommen definitiv wieder!"</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1B4F72]">Investition, die sich rechnet</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Wählen Sie das Paket, das zu Ihrer Destination passt</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
            <div className="text-4xl font-bold mb-6 text-[#1B4F72]">24.900€<span className="text-lg font-normal text-gray-600">/einmalig</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">Native iOS & Android App</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">KI-Concierge Basismodell</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">Interaktive Karte + 50 POIs</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">Basis-Gamification</span></li>
            </ul>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 rounded-lg font-semibold transition">Angebot anfordern</button>
          </div>
          <div className="border-2 border-[#27AE60] rounded-xl p-8 relative">
            <div className="absolute top-0 right-8 bg-[#27AE60] text-white px-4 py-1 rounded-b-lg text-sm font-semibold">Empfohlen</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Professional</h3>
            <div className="text-4xl font-bold mb-6 text-[#1B4F72]">44.900€<span className="text-lg font-normal text-gray-600">/einmalig</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">Alles aus Starter</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">KI mit Echtzeit-Kontext (Wetter, Tide)</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">Loyalty-Programm + Partner-Integration</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">White-Label Dashboard für BLT</span></li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span className="text-gray-700">12 Monate Premium-Support</span></li>
            </ul>
            <button className="w-full bg-[#27AE60] hover:bg-[#229954] text-white py-3 rounded-lg font-semibold transition">Jetzt starten</button>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8 text-sm">zzgl. 490€/Monat Hosting & Wartung | DSGVO-konform | Barrierefreiheit nach BITV 2.0</p>
      </section>

      <footer id="contact" className="bg-[#1B4F72] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die Zukunft des Inseltourismus?</h2>
          <p className="text-lg mb-8 opacity-90">Lassen Sie uns besprechen, wie BLT Borkum Ihre Gästezufriedenheit revolutioniert</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2 mb-8">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ihre@email.de" required className="flex-1 px-4 py-3 rounded-lg text-gray-900" />
            <button type="submit" className="bg-[#27AE60] hover:bg-[#229954] text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"><Mail className="w-5 h-5" />{submitted ? 'Versendet' : 'Kontakt'}</button>
          </form>
          <div className="border-t border-white border-opacity-20 pt-8 mt-8">
            <p className="text-sm opacity-75">Powered by Trehl AI – Intelligente Lösungen für digitale Destinationen</p>
          </div>
        </div>
      </footer>
    </div>
  )
}