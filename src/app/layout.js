import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"]})

export const metadata = {
  title: "Lama dev",
  description: "Ihis is a Main page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-black transition-colors duration-300 bg-white dark:bg-black dark:text-white">
      
       <ThemeProvider>
       <AuthProvider>
      <div className="container">
      <Navbar />
        {children}
        <Footer />
      </div>
      </AuthProvider>
      </ThemeProvider>
      
      </body>
    </html>
  );
}
