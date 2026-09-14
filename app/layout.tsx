import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'FraudLink — Cyber Fraud Investigation',description:'AI-powered cyber fraud investigation and digital artifact correlation'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
