import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Mulish } from "next/font/google";
import "./globals.css";
import SIdebar from "./Components/SIdebar/SIdebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import { ClerkProvider, auth } from '@clerk/nextjs'

const mulish = Mulish({ 
  weight: ["400","500","600","700", "800"],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const {userId} = auth()
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body className={mulish.className}>
          <NextTopLoader
          height={2}
          color="#fca311"
          easing="cubic-bezier(.53, 0.21, 0, 1)"
          />
          <ContextProvider>
            <GlobalStyleProvider>
              {userId && <SIdebar/>}
              <div className="w-full">{children}</div>
            </GlobalStyleProvider>
          </ContextProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
