import { Inter, PT_Serif, Montserrat } from 'next/font/google'
import './globals.css'
import { Metadata } from "next";
import Analytics from "./_components/layout/GTM";
import { Suspense } from 'react';



const inter = Inter({ subsets: ['latin'] })

const ptSerif = PT_Serif({
  subsets: ['latin'],
  variable: '--font-ptSerif',
  weight: ['400', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '400', '500', '600', '700'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ptSerif.variable} ${montserrat.variable} max-w-[1920px] mx-auto`}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html >
  )
}

export const metadata: Metadata = {
  title: "SMA Building & Roofing",
  description:
    "Contact us today for all your roofing and building needs in Cullompton and surrounding areas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "SMA Building & Roofing",
    description:
      "Contact us today for all your roofing and building needs in Cullompton and surrounding areas.",
    url: "https://www.smaroofing.com",
    siteName: "SMA Roofing",
    images: {
      url: "https://www.smaroofing.com/images/sma logo_2@3x.png",
      width: 600,
      height: 241,
      alt: "SMA Roofing Logo",
    },

    locale: "en_US",
    type: "website",
  },
};