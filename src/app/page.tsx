'use client'
import { useState } from 'react'
import { MapPin, Sparkles, Trophy, Mail, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1B4F72]">BLT Borkum</div>
          <a href="#cta" className="bg-[#27AE60] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#229954] transition">Demo anfragen</a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4F72] via-[#2874A6] to-[#27AE60] opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Schluss mit Urlaubsstress.<br/>Ihre Gäste verdienen mehr.</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">300.000 Gäste suchen jährlich nach Aktivitäten – während Print-Flyer im Regal liegen. Die native App mit KI-Concierge, Loyalty-System und Echtzeit-Inselkarte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="ihre@email.de" value={email} onChange={(e) => setEmail(e.target.value)} className="px-6 py-4 rounded-lg text-gray-900 w-full sm:w-80 text-lg" />
            <button onClick={() => setSubmitted(true)} className="bg-[#27AE60] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#229954] transition whitespace-nowrap w-full sm:w-auto">{submitted ? '✓ Gesendet!' : 'Beratung sichern'}</button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4F72]">3 Probleme, die Ihre Gäste täglich erleben</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Suche-Anstrengung', text: 'Gäste verlieren 2h+ pro Tag mit Recherche in Papier-Flyern, veralteten Websites und geschlossenen Touristinfos.' },
              { title: 'Reizüberflutung', text: '50+ Aktivitäten, 30 Restaurants, 12 Events – ohne Filter oder Empfehlung fühlt sich Urlaub wie Arbeit an.' },
              { title: 'Aktivitätsplanung', text: 'Tide-Zeiten, Wetter, Brutgebiete: Ohne Echtzeitdaten sind Wattwanderungen, Radtouren und Strandbesuche Glückssache.' }
            ].map((problem, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#E74C3C]">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1B4F72]">Warum Kurkarten-Apps scheitern</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-2xl">❌</div>
                  <div><div className="font-bold text-lg mb-1">KurkartenApp</div><p className="text-gray-600">Statische PDF-Umwandlung ohne Personalisierung oder Kontext</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-2xl">❌</div>
                  <div><div className="font-bold text-lg mb-1">Print-Reiseführer</div><p className="text-gray-600">Veraltet ab Drucklegung, keine Echtzeitdaten zu Events oder Wetter</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-2xl">❌</div>
                  <div><div className="font-bold text-lg mb-1">touristinfo.de</div><p className="text-gray-600">Desktop-Design, keine Push-Benachrichtigungen, keine Offline-Nutzung</p></div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] p-8 rounded-xl text-white">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-3xl font-bold mb-6">BLT Borkum App</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Check className="w-6 h-6 flex-shrink-0" /><span>KI-Concierge passt Vorschläge an Wetter, Tide & Interessen an</span></li>
                <li className="flex items-center gap-3"><Check className="w-6 h-6 flex-shrink-0" /><span>Loyalty-Punkte bei jedem Check-in – Wiederkehr-Anreiz integriert</span></li>
                <li className="flex items-center gap-3"><Check className="w-6 h-6 flex-shrink-0" /><span>Offline-Karten + Push für Last-Minute-Deals von Partnern</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4F72]">Features, die Gäste binden</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: MapPin, title: 'Interaktive Inselkarte', text: 'Echtzeit-Layer für Tide, Wetter, Brutgebiete und Partner-Deals. Offline-Modus für Strand ohne Netz.' },
              { Icon: Sparkles, title: 'KI-Concierge', text: 'Frag "Was mache ich heute?" – die KI schlägt basierend auf Profil, Wetter und Verfügbarkeit vor.' },
              { Icon: Trophy, title: 'Gamification & Loyalty', text: 'Punkte sammeln bei Check-ins, Challenges freischalten, Rabatte bei Partnern einlösen.' }
            ].map(({ Icon, title, text }, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <Icon className="w-16 h-16 text-[#27AE60] mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1B4F72]">Was Touristiker sagen</h2>
          <div className="bg-white p-10 rounded-xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B4F72] to-[#27AE60]" />
              <div>
                <div className="font-bold text-xl">Sabine Müller</div>
                <div className="text-gray-600">Leiterin Touristinfo, Nordsee-Region</div>
              </div>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed italic">"Seit Einführung der App haben wir 40% weniger Anfragen am Schalter – und gleichzeitig bessere Gästebewertungen. Die KI-Empfehlungen treffen genau den Geschmack unserer Familien und Aktivurlauber. Partner berichten von 25% mehr Buchungen über App-Deals."</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#1B4F72]">Einfache Preise für jeden Bedarf</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold text-[#1B4F72] mb-6">2.900€<span className="text-lg font-normal text-gray-600">/Monat</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span>Basis-Karte + Content-Management</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span>bis 50.000 Nutzer/Jahr</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" /><span>Standard-Support (Email)</span></li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-300 transition">Mehr erfahren</button>
            </div>
            <div className="bg-gradient-to-br from-[#1B4F72] to-[#27AE60] p-8 rounded-xl shadow-2xl text-white relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">Empfohlen</div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">4.900€<span className="text-lg font-normal opacity-90">/Monat</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 flex-shrink-0 mt-1" /><span>Alles aus Starter</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 flex-shrink-0 mt-1" /><span>KI-Concierge + Gamification</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 flex-shrink-0 mt-1" /><span>Unbegrenzte Nutzer</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 flex-shrink-0 mt-1" /><span>White-Label + API-Zugang</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 flex-shrink-0 mt-1" /><span>Dedizierter Account Manager</span></li>
              </ul>
              <button className="w-full bg-white text-[#1B4F72] py-3 rounded-lg font-bold hover:bg-gray-100 transition">Jetzt starten</button>
            </div>
          </div>
        </div>
      </section>

      <footer id="cta" className="bg-[#1B4F72] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für die Gäste-App der Zukunft?</h2>
          <p className="text-xl mb-8 opacity-90">Kostenloses Strategiegespräch mit unserem Tourismus-Team buchen</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <input type="email" placeholder="ihre@email.de" className="px-6 py-4 rounded-lg text-gray-900 w-full sm:w-96 text-lg" />
            <button className="bg-[#27AE60] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#229954] transition whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2"><Mail className="w-5 h-5" />Demo anfragen</button>
          </div>
          <div className="border-t border-white/20 pt-8 text-sm opacity-75">
            <p>Powered by Trehl AI – Intelligente Lösungen für Destinationen</p>
          </div>
        </div>
      </footer>
    </main>
  )
}