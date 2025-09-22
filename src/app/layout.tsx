import type { Metadata } from "next";
import "./globals.scss";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "../components/navbar";
import { navLinks } from "../utils/data";
import { Footer } from "../components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const tanHeadline = localFont({
  src: "../../public/fonts/Tan-Headline.otf",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "AWS Learning Club - UST",
  openGraph: {
    images: [
      {
        url: "https://www.aws-ust.org/meta.png",
        alt: "AWS Learning Club - UST",
        width: 1200,
        height: 630,
      },
    ],
  },
  description:
    "Join the first-ever cloud organization at the University of Santo Tomas! AWS Learning Club - UST empowers students to build, dream, and innovate with Amazon Web Services. Discover cloud computing, develop technical skills, and connect with a community of aspiring builders and innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${tanHeadline.variable}`}>
        <Navbar links={navLinks} />
        <main className="main">{children}</main>
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
