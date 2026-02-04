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
        
        style={{ backgroundColor: "white" }}
      >
        {/* Header Section */}
        <header className="w-full bg-black/50 backdrop-blur-md py-6 shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-400 drop-shadow-lg">
            MARK MACHUKHU'S PROJECTS
          </h1>
        </header>

        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md rounded-xl shadow-md my-6 mx-auto max-w-3xl">
          <ul className="flex justify-center space-x-10 p-4">
            <li>
              <Link
                href="/authenthication/registration"
                className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/authenthication/login"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

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
