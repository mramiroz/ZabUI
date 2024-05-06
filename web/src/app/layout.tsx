import { Analytics } from "@vercel/analytics/react"
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import HeaderWrap from "@/components/header/HeaderWrap";
import SessionWrapper from "@/components/home/SessionWrapper";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });


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
        <title>CompUI</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} bg-gray-800 text-white flex flex-col min-h-screen`}>
        <SessionWrapper>
          <HeaderWrap />
          <main className="flex flex-grow">
            <div className="w-full mx-2 md:mx-32 md:my-10">{children}<Analytics/></div>
          </main>
        </SessionWrapper>
        <Footer />
      </body>
    </html>
  );
}
