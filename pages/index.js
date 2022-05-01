import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pic from '../tester_pic.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nakedguacamole</title>
      </Head>
      <div className={styles.content}>
        <h1>This is the homepage</h1>
      </div>
    </div>
  )
}
