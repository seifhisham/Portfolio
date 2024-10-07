import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seif Portfolio",
  description: "Seif Hisham backend developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-blue-50 text-blue-700 pt-28 sm:pt-36`}>
        <div className="relative flex flex-wrap items-center justify-center">
          <div className="bg-[#41547f] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
          w-[10rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"></div>
          <div className="bg-[#4c455157] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
          w-[10rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        </div>
        
        <Header />
        {children}
      </body>
    </html>
  );
}
