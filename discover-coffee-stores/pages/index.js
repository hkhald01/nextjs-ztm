import Head from 'next/head';
import Image from 'next/image';
import Banner from './components/banner';
import styles from '../styles/Home.module.css';

const Home = () => {
 const handleBannerButtonOnClick = () => {
  console.log('hi banner button');
 };
 return (
  <div className={styles.container}>
   <Head>
    <title>Coffe Connoisseur</title>
    <meta name='description' content='Generated by create next app' />
    <link rel='icon' href='/favicon.ico' />
   </Head>

   <main className={styles.main}>
    <Banner
     buttonText='View stores nearby!'
     onClick={handleBannerButtonOnClick}
    />
   </main>
  </div>
 );
};

export default Home;
