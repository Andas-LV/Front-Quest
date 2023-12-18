"use client"
import React from 'react';
import QuestPage from "@/app/components/QuestPage";
import questions from '../../data/questions.json';

const Page = () => {
    return (
        <div>
            <h2>HTML</h2>
            <QuestPage questionData={questions.html} />
        </div>
    );
};

export default Page;