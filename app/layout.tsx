import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mark Machukhu Projects",
  description: "Mark Machukhu || Software engineering student | Kisii university",
};

export const viewport = { width: "device-width", initialScale: 1 };
export const dat = new Date().toLocaleDateString("en-US", {weekday:"short", year:"numeric",day:"numeric"});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        
      



        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
         © Mark Machukhu . Software Engineer . {dat}
        </footer>
      </body>
    </html>
  );
}
