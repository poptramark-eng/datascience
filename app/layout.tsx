import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Science Project",
  description: "Mark Machukhu || Software engineering student | Kisii university",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center font-sans text-gray-900"
        style={{ backgroundImage: "url('/bg.jpg')" }} // 👈 background from public folder
      >
        <div className="bg-white/80 min-h-screen">
          <div className="max-w-5xl mx-auto p-6">
           
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
