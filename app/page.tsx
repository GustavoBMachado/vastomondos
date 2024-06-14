import Head from 'next/head';
import Header from '../components/Header';
import CombinedSection from '../components/CombinedSection';
import NewsletterSignup from '../components/NewsletterSignup';
import SocialLinks from '../components/SocialLinks';
import Contato from '../components/Contato';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vasto Mondo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CombinedSection />
      <NewsletterSignup />
      <SocialLinks />
      <Contato />
      <Footer />
    </div>
  );
}