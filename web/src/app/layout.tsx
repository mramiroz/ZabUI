import { Roboto, Roboto_Condensed } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import HeaderWrap from "@/components/header/HeaderWrap";
import SessionWrapper from "@/components/home/SessionWrapper";
import { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zabui.vercel.app"),
  title: {
    default: "ZabUI - React Components Library",
    template: "%s | ZabUI - React Components Library",
  },
  description: "ZabUI is a library of ReactJS components that can be used in your website you can custom your components, simply as installing a npm package",
  openGraph: {
    title: "ZabUI - React Components Library",
    description: "ZabUI is a library of ReactJS components that can be used in your website you can custom your components, simply as installing a npm package",
    type: "website",
    url: "https://zabui.vercel.app",
    siteName: "ZabUI",
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
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${roboto.className} bg-gray-800 flex flex-col text-white min-h-screen`}>
        <SessionWrapper>
          <HeaderWrap>{children}</HeaderWrap>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}