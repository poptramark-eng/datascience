import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Science Project",
  description:
    "Mark Machukhu || Software engineering student | Kisii university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900 font-sans">
        <div className="max-w-5xl mx-auto p-6">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Database CRUD Operations Application
          </h1>

          {/* Navigation */}
          <nav className="bg-white shadow-md rounded-lg mb-6">
            <ul className="flex space-x-6 p-4 justify-center">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/addForm"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  USER ADDITION FORM
                </Link>
              </li>
            </ul>
          </nav>

          {/* Article Section */}
          <article className="bg-white shadow-md rounded-lg p-6 mb-6 leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusamus, qui deleniti harum quod ipsa at natus eaque labore
            molestiae sunt fuga consequatur consectetur voluptatibus dolore
            libero totam fugit? Facere.
          </article>

          {/* Children (page content) */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
