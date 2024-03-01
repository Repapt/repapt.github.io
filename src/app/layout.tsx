import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";

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
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
