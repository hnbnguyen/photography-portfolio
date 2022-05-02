import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import pic from '../public/tester_pic.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>nakedguacamole | home</title>
        <meta name="keywords" content="mimi" />
      </Head>
      <div className={styles.content}>
        <Image src={pic} />
      </div>
    </>
  )
}
