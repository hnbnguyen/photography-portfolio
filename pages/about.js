import styles from '../styles/Home.module.css';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>nakedguacamole | about</title>
                <meta name='keywords' content='mimi' />
            </Head> 
            <div className={styles.content}>
                <h2>about</h2>
                <p>
                    Hi! I&apos;m Mimi and I take photos on film. <br></br>
                    Currently studying Computing and learning Web Development.<br></br>
                    - <br></br>
                    2000-2016 Hanoi, Vietnam<br></br>
                    2016-2019 AZ, USA<br></br>
                    2019- Ontario, CA
                </p>
            </div>
        </>
     );
}
 
export default About;