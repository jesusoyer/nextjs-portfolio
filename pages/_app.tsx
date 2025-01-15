import '@/styles/globals.css';

// pages/_app.tsx
import { AppProps } from 'next/app';
import GlobalNavbar from '@/components/GlobalNavbar'; // Import the global navbar
import Footer from '@/components/Footer'; // Import the footer

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* Include the Global Navbar */}
      <GlobalNavbar />

      {/* Render the page component */}
      <Component {...pageProps} />

      {/* Include the Footer */}
      <Footer />
    </div>
  );
}

export default MyApp;
