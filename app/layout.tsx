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
<<<<<<< HEAD
        
        style={{ backgroundColor: "white" }}
      >
        {/* Header Section */}
        <header className="w-full bg-black/50 backdrop-blur-md py-6 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 drop-shadow-lg">
            MARK MACHUKHU'S PROJECTS
          </h1>
        </header>
=======
        className="min-h-screen bg-cover bg-center font-sans flex flex-col"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      >
        
>>>>>>> a85b1ca58d2e9c2958dacf2525c7838438e82600


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
