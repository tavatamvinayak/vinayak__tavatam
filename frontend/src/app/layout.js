import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/basicComponents/Navbar";
import Footer from "@/components/basicComponents/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vinayak Tavatam",
  description: "MERN Stack Developer, Full-Stack Web Developer.",

  icons: {
    icon: "https://lh3.googleusercontent.com/a/ACg8ocKTwdi3htKXZN8rDbcFZw6PD7rQMwSRsqzuSEdhIkRAiZU=s288-c-no",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <>
            <ActiveSectionContextProvider>
              
              <Navbar />
              {children}
              <Footer />
            </ActiveSectionContextProvider>
          </>
        </>
      </body>
    </html>
  );
}
