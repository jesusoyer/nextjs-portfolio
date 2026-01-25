import '@/styles/globals.css';

// pages/_app.tsx
import { AppProps } from 'next/app';
import Navigation from '../components/Navigation'; // Import the global navbar
import Footer from '@/components/Footer'; // Import the footer

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      
      <Navigation />

      {/* Render the page component */}
      <Component {...pageProps} />

      {/* Include the Footer */}
      <Footer />
    </div>
  );
}

export default MyApp;
