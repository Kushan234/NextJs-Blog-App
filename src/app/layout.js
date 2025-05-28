// layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama dev",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-black transition-colors duration-300 bg-white dark:bg-black dark:text-white`}>
        <AuthProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}