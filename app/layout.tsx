import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Data Science Project",
  description: "Mark Machukhu || Software engineering student | Kisii university",
  
};
export const viewport = { width: "device-width", initialScale: 1, };
export const dat = new Date().toString();
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center font-sans text-gray-900"
        style={{ backgroundImage: "url('/bg.jpg')" }} // 👈 background from public folder
      >
        <div>
           <div className="grid">
            <div className="item item1">
                  {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Database CRUD Operations Application
      </h1>

            </div>
            <div className="item itemn">
                      <nav className="bg-white shadow-md rounded-lg">
         <ul className="flex space-x-6 p-4 justify-center">
           <li>
            <Link
              href="/authenthication/registration"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Register with us
              </Link>
          </li>
            <li>
            <Link
              href="/authenthication/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Login
            </Link>
            
          </li>

        </ul>
      </nav>
            </div>
            <div className="item item2">
              <main>{children}</main>
              </div>

            
           </div>
            
          
        </div>
           
              <footer>
                Mark Machukhu || Software engineer || {dat}
              </footer>
                    
      </body>
    </html>
  );
}
