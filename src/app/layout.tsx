import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "./providers/theme-provider"
import Navbar from "@/components/ui/navbar"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My App",
  description: "Next.js + shadcn layout",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* TOP NAVIGATION */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="px-[24px] py-[24px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
