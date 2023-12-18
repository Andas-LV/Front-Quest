import styles from "./components.module.css";

export default function Btn({handleNextQuestion}) {
    return (
        <button onClick={handleNextQuestion} className={styles.button}>
            next
            <div className={styles.arrowWrapper}>
                <div className={styles.arrow}></div>
            </div>
        </button>
    )
}