import styles from '../../styles/Portfolio.module.css'
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await res.json();
    return {
        props: { portfolios : data }
        // portfolios : data
    }
}

const Portfolio = ({ portfolios }) => {
    return ( 
        <>
            <Head>
                <title>nakedguacamole | portfolio</title>
                <meta name="keywords" content="mimi" />
            </Head> 
            <div className={styles.content}>
                <h2>work</h2>
                {portfolios.map( portfolio => (
                    <Link href={'/portfolio/' + portfolio.id} key={portfolio.id}>
                        <a className={styles.single}>
                            <p>{portfolio.title}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Portfolio;