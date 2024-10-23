import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

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
      <body
        className={`${poppins.variable} ${helveticaNow.variable} ${TTChocolates.variable} font-tt-chocolates antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
