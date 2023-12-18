import styles from './components.module.css';
import {useState} from "react";

export default function QuestCard({question}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCheckboxChange = (optionId) => {
        if (selectedOptions.includes(optionId)) {
            setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
        } else {
            setSelectedOptions([...selectedOptions, optionId]);
        }
    };

    if(question.hasOptions){
        return(
            <div className={styles.cardWrapper}>
                <div className={styles.questNumber}>Вопрос №{question.id}</div>
                <p className={styles.questText}>{question.text}</p>
                <ul>
                    {question.options.map((option) => (
                        <li key={option.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={option.id}
                                    checked={selectedOptions.includes(option.id)}
                                    onChange={() => handleCheckboxChange(option.id)}
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
                <p>{question.text}</p>
                <div>{question.answer}</div>
            </div>
        )
    }

}