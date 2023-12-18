import Header from "@/app/components/Header";
import styles from "../page.module.css";

export default function Layout ({children}){
    return(
        <main className={styles.main}>
            <Header/>
                {children}
        </main>
    )
}