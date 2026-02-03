import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Science Project",
  description: "Mark Machukhu || Software engineering student | Kisii university",
};

export const viewport = { width: "device-width", initialScale: 1 };
export const dat = new Date().toLocaleDateString();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center font-sans flex flex-col"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        


        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-300 mt-10 border-t border-gray-700">
          Mark Machukhu || Software Engineer || {dat}
        </footer>
      </body>
    </html>
  );
}
