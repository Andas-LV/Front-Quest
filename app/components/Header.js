import styles from "./components.module.css";
import Link from "next/link";
export default function Header (){
    return(
        <div className={styles.wrapper}>
            <nav className={styles.nav}>
                <Link href="/pages/Html">
                    <div className={styles.navItem}>HTML</div>
                </Link>

                <Link href="/pages/css">
                    <div className={styles.navItem}>CSS</div>
                </Link>

                <Link href="/pages/js">
                    <div className={styles.navItem}>JavaScript</div>
                </Link>

                <Link href="/pages/react">
                    <div className={styles.navItem}>React</div>
                </Link>
            </nav>
        </div>
    )
}
