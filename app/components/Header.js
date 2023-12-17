import styles from "./components.module.css";
import Link from "next/link";
export default function Header (){
    return(
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <Link href="/pages/html">
                    <div className={styles.navItem}>HTML</div>
                </Link>
                <Link href="/pages/css">
                    <div className={styles.navItem}>CSS</div>
                </Link>
                <div className={styles.navItem}>JS</div>
                <div className={styles.navItem}>React</div>
            </nav>
        </div>
    )
}
