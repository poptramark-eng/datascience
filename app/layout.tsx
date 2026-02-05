import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mark Machukhu's Projects",
  description: "Mark Machukhu || Software engineering student | Kisii university",
  other: {'google-adsense-account': 'ca-pub-6884321061151028'},
  icons: 'https://llywftzbmhpxnsewxdxf.supabase.co/storage/v1/object/public/Data%20center/unnamed.jpg'
};

export const viewport = { width: "device-width", initialScale: 1 };
export const dat = new Date().toLocaleDateString("en-US", {weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'});

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
