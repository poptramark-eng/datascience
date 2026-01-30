import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Data Science Project",
  description: "Mark Machukhu || Software engineering student | Kisii university",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
