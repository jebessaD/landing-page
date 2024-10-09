import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

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

export const metadata = {
  title: "JEBA - Game",
  description: "Generated by create next app",
};

const terminus = localFont({
  src: "/fonts/Terminus.woff",
  variable: "--font-terminus-bold",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${terminus.variable}`}>
      <body className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-grow">
          <SideBar />
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
