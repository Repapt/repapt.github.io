import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navigation/navbar";

export const metadata: Metadata = {
  title: "Samuel Liu",
  description: "personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="app">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
