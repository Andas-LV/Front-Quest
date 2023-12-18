import {useState} from "react";
import styles from './components.module.css';

export default function QuestCard({question}) {
    const [selectedOption, setSelectedOption] = useState([]);

    const handleCheckboxChange = (optionId) => {
        if (selectedOption.includes(optionId)) {
            setSelectedOption(selectedOption.filter((id) => id !== optionId));
        } else {
            setSelectedOption([optionId]);
        }
    };

    const isCorrectAnswer = (isCorrect) => {
        if(isCorrect){
            alert(true)
        } else{
            alert(false)
        }
    }

    if(question.hasOptions){
        return(
            <div className={styles.cardWrapper}>
                <div className={styles.questNumber}>Вопрос №{question.id}</div>
                <p className={styles.questText}>{question.text}</p>
                <ul>
                    {question.options.map((option) => (
                        <li key={option.id} className={styles.li}>
                            <label className={styles.label}>
                                <input
                                    type="checkbox"
                                    value={option.id}
                                    checked={selectedOption.includes(option.id)}
                                    onChange={() => handleCheckboxChange(option.id)}
                                    onClick={() => (isCorrectAnswer(option.isCorrect))}
                                />
                                {option.text}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <div className={styles.cardWrapper}>
                <div className={styles.questNumber}>Вопрос №{question.id}</div>
                <p className={styles.questText}>{question.text}</p>
                <h3 className={styles.p}>Ответ :</h3>
                <div className={styles.answer}>{question.answer}</div>
            </div>
        )
    }

}