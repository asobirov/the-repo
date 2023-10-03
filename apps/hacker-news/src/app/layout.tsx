import { ReactQueryProvider } from './providers'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { headers } from "next/headers";

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
 })

export const metadata: Metadata = {
  title: 'Hacker news | asobirov',
  description: 'Hacker news client',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={["font-sans", poppins.variable].join(" ")}>
      <ReactQueryProvider headers={headers()}>
        {children}
      </ReactQueryProvider>
    </body>
  </html>
  )
}
