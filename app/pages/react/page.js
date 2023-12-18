import React from 'react';
import QuestPage from "@/app/components/QuestPage";
import questions from '../../data/questions.json';

const Page = () => {
    return (
        <div>
            <h2>React</h2>
            <QuestPage questionData={questions.react} />
        </div>
    );
};

export default Page;