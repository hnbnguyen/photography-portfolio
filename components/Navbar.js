import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>nakedguacamole</h1>
            </div>
            <Link href="/"><a>home</a></Link>
            <Link href="/about"><a>about</a></Link>
            <Link href="/portfolio"><a>portfolio</a></Link>
        </nav>
     );
}
 
export default Navbar;
