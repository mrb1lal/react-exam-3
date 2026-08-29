
import "./globals.css";
import Footer from '@/components/footer/Footer';
import Providers from '@/components/Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
