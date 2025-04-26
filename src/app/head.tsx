import Script from "next/script";
export default function Head() {
  return (
    <>
      {/* SEO Básico */}
      <title>BTCrypto Watch</title>
      <meta
        name="description"
        content="BTCrypto Watch — your cryptocurrency dashboard with rankings, charts and up-to-date news."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="c3lGoFV84zsdc1V-gk7VLE8PX8OBvJjWojlR3-kqFBM"
      />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph para redes sociais */}
      <meta property="og:title" content="BTCrypto Watch" />
      <meta
        property="og:description"
        content="Follow cryptocurrency charts, rankings and news in real time!"
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://btcrypto-watch.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="BTCrypto Watch" />
      <meta
        name="twitter:description"
        content="Complete dashboard to monitor the crypto market."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Google Tag Manager Script */}
      <Script id="gtm-init" strategy="afterInteractive">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WZTPDWWT');
          `}
      </Script>
    </>
  );
}
