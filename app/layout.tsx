import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/lang-context";
import CallFloatingButton from "./components/CallFloatingButton";
import PageTransition from "./components/page-transition";
import Script from "next/script";
import { DEFAULT_OG_IMAGE, GBP_URL } from "@/lib/seo";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bestofmoroccotour.com"),
  title: {
    default: "Best of Morocco Tours — Customized Private Morocco Tours",
    template: "%s | Best of Morocco Tours",
  },
  description:
    "Best of Morocco Tours: wide experience in Morocco Tourism. Specialized in customized private Morocco tours, Imperial Cities, Sahara desert expeditions, MICE, and certified native tour guides.",
  applicationName: "Best of Morocco Tours",
  openGraph: {
    type: "website",
    siteName: "Best of Morocco Tours",
    title: "Best of Morocco Tours — Customized Private Morocco Tours",
    description:
      "Wide experience of Morocco Tourism. Customized private tours, Imperial Cities, Sahara desert expeditions, MICE, and certified native tour guides.",
    locale: "en_US",
    alternateLocale: ["fr_CA", "en_CA"],
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Best of Morocco Tours" }],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [
      { url: "/icon.png" },
    ],
    shortcut: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Best of Morocco Tours",
                  alternateName: "Best of Morocco",
                  url: "https://www.bestofmoroccotour.com",
                },
                {
                  "@type": "TravelAgency",
                  "@id": "https://www.bestofmoroccotour.com/#agency",
                  "name": "Best of Morocco Tours",
                  "url": "https://www.bestofmoroccotour.com",
                  "logo": "https://www.bestofmoroccotour.com/logo.png",
                  "telephone": "+15145158382",
                  "areaServed": ["United States", "Canada", "United Kingdom", "Morocco", "Worldwide"],
                  "priceRange": "$$$",
                  "founder": {
                    "@type": "Person",
                    "name": "Ayoub Sadeddine",
                    "jobTitle": "CEO & Licensed Tour Guide (Licence No. 2816)"
                  },
                  "knowsAbout": [
                    "Customized Morocco Tours",
                    "Imperial Cities of Morocco",
                    "Sahara Desert Expeditions",
                    "MICE Conferences & Events",
                    "Morocco Official Tour Guides",
                    "Jewish Heritage of Morocco",
                    "Atlantic Ocean Journeys"
                  ]
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8ZK4FGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LangProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CallFloatingButton />
        </LangProvider>

        {/* Google Analytics GA4 — G-WEM88RMSG9 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WEM88RMSG9"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEM88RMSG9');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8ZK4FGP');
          `}
        </Script>
      </body>
    </html>
  );
}

