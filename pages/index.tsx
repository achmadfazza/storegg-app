import type { NextPage } from 'next';
import { useEffect } from 'react';
import aos from 'aos';
import NavBar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/MainBanner/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Storry from '../components/organisms/Storry';
import Footer from '../components/organisms/Footer';
import Head from 'next/head';

const Home: NextPage = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name='description'
          content='Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati'
        />
        <meta property='og:title' content='StoreGG - Get a New Experience in Gaming' />
        <meta
          property='og:description'
          content='Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati'
        />
      </Head>
      <NavBar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Storry />
      <Footer />
    </>
  );
};

export default Home;
