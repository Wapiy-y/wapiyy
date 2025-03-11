import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import '@ant-design/v5-patch-for-react-19'
import { Analytics } from "@vercel/analytics/next"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I'm Wapiyy",  
  description: " my personal space",
  icons: {
    icon: '/circle-icon.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
