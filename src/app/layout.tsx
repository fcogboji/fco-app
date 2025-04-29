// src/app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from '../components/Navbar';
import Footer from "@/components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar /> {/* ✅ This is now valid */}
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
