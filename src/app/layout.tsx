import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sahil | Full Stack Dev",
  description: "Portfolio Sahil I. Khan, Full Stack Dev.",
  icons: {
    icon: "https://devlucas.website/imgs/favicon.png"
  },
  openGraph: {
    title: "Sahil I. Khan | Full Stack Dev",
    description: "Portfolio Sahil I. Khan, Full Stack Dev.",
    url: "https://devlucas.website",
    siteName: "Sahil",
    images: [
      {
        url: "https://devlucas.website/imgs/favicon.png",
        width: 256,
        height: 256,
        alt: "Portfolio Sahil I. Khan",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil | Full Stack Dev",
    description: "Portfolio Sahil I. Khan, Full Stack Dev.",
    images: ["https://devlucas.website/imgs/favicon.png"],
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}>
        {children}
      </body>
    </html>
  )
}