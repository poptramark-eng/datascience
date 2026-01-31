import type { Metadata } from "next";
import "./globals.css";

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
        

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
