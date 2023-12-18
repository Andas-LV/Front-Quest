import React from 'react';
import QuestPage from "@/app/pages/QuestPage";
import questions from '../../data/questions.json';

const Page = () => {
    return (
        <div>
            <h2>JavaScript</h2>
            <QuestPage questionData={questions.javascript} />
        </div>
    );
};

export default Page;