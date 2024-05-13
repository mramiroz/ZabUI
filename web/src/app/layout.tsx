import { Analytics } from "@vercel/analytics/react"
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import HeaderWrap from "@/components/header/HeaderWrap";
import SessionWrapper from "@/components/home/SessionWrapper";
import { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://compui.vercel.app"),
  title: {
    default: "CompUI - React Components Library",
    template: "%s | CompUI - React Components Library",
  },
  description: "CompUI is a library of ReactJS components that can be used in your website you can custom your components, simply as installing a npm package",
  openGraph: {
    title: "CompUI - React Components Library",
    description: "CompUI is a library of ReactJS components that can be used in your website you can custom your components, simply as installing a npm package",
    type: "website",
    url: "https://compui.vercel.app",
    siteName: "CompUI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${roboto.className} bg-gray-800 text-white flex flex-col min-h-screen`}>
        <SessionWrapper>
          <HeaderWrap>{children}</HeaderWrap>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}