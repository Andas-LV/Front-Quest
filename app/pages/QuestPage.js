"use client"
import React, { useState } from 'react';
import QuestCard from "../components/QuestCard";
import Btn from "@/app/components/Btn";

const QuestPage = ({ questionData }) => {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questionData[currentQuestionIndex];

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert('Вы ответили на все вопросы!');
            setCurrentQuestionIndex(0);
        }
    };

    return (
        <div>
            <QuestCard question={currentQuestion} />
            <Btn handleNextQuestion={handleNextQuestion}/>
        </div>
    );
};

export default QuestPage;