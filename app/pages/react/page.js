import React from 'react';
import QuestPage from "@/app/pages/QuestPage";
import questions from '../../data/questions.json';

const Page = () => {
    return (
        <div>
            <h1>React</h1>
            <QuestPage questionData={questions.react} />
        </div>
    );
};

export default Page;