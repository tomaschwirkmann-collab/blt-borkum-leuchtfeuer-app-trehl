import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'BLT Borkum — Native Gäste-App mit Loyalty + Inselkarte + Gamification + KI-Concierge', description: 'Powered by Trehl AI' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="de"><body>{children}</body></html>) }