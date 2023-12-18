import Header from "./components/Header";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>

      <h1>Выберите Тест</h1>
       <div></div>
    </main>
  )
}
