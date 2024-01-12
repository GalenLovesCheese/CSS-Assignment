import Link from 'next/link';
import styles from "./Navbar.module.css";
import Image from 'next/image';

export default function NavBar(){
    return(
    <>
        <nav className={`${styles.navbar} ${styles.sticky}`}>
            <Image src='/media/Brawl-Stars-Logo.png'
                className={styles.logo}
                width={150}
                height={150}
            />
        
            <div className={styles.navItems}>
                <Link href='/' className={styles.navitem}>Home</Link>
                <Link href='#' className={styles.navitem}>Brawlers</Link>
                <Link href='#' className={styles.navitem}>Profile</Link>
                <Link href='#' className={styles.navitem}>Brawlers</Link>
                <Link href='#' className={styles.navitem}>Events</Link>
                <Link href='#' className={styles.navitem}x>Leaderboards</Link>
            </div>
        </nav>
        
    </>)
}