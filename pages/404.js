import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);

    return ( 
        <div className='not-found'>
            <h2>this is awkward but erm...</h2>
            <h3>you&apos;ve wandered into a page that doesn&apos;t exist</h3>
            <p>we will redirect you back to our <Link href='/'><a>homepage</a></Link> in 5 sec</p>
        </div>
     );
}
 
export default NotFound;