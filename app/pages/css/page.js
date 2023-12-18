import React from 'react';
import QuestPage from "@/app/pages/QuestPage";
import questions from '../../data/questions.json';

const Page = () => {
    return (
        <div>
            <h1>CSS</h1>
            <QuestPage questionData={questions.css} />
        </div>
    );
};

export default Page;