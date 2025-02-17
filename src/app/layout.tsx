import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SmartRent - AI-Powered Real Estate Solution",
  description: "Find your dream home instantly with AI-powered matching",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

