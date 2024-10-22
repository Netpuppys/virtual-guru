import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

// Importing Poppins from Google Fonts
const poppins = Poppins({
  // src: "./fonts/Poppins-Regular.ttf",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Local font imports
const helveticaNow = localFont({
  src: "./fonts/HelveticaNowDisplay.woff",
  variable: "--font-helvetica-now-display",
  weight: "100 200 300 400 500 600 700 800 900",
});

const TTChocolates = localFont({
  src: "./fonts/TTChocolatesRegular.otf",
  variable: "--font-tt-chocolates",
  weight: "400 500 600 700",
});

// Metadata
export const metadata = {
  title: "Virtual Guru",
  description:
    "Are you ready to transform your career in just 15 minutes a day? Introducing CGP ACT (Accelerated Career Trajectory)—the only program that delivers a personalized career growth plan based on your unique strengths, aspirations, and growth areas. Priced at just INR 2999 + GST, you'll get access to an 8-week transformative journey that will revolutionize your career—all by investing just 15 minutes a day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/fbevents.js"
        />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3520646018188374');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3520646018188374&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JRLLDD95GY"
        />
        <Script
          id="gtag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());
              gtag("config", "G-JRLLDD95GY");
            `,
          }}
        />
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, l, a, r, i, t, y) {
                c[a] =
                  c[a] ||
                  function () {
                    (c[a].q = c[a].q || []).push(arguments);
                  };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "omgfxv9mki");
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${helveticaNow.variable} ${TTChocolates.variable} font-tt-chocolates antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
