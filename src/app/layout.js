import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
      <Navbar />
    </html>
  );
}
