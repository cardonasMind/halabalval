import React from "react";
import styles from "./index.module.scss";

import Question from "./Question";
import Answer from "./Answer";

// THIS WILL BE DELETED
const placeholderQuestionOne = {
    question: {
        text: "This flag corresponds to?",
        flag: "https://restcountries.eu/data/col.svg"
    },
    answers: [
        {
            text: "Colombia",
            correct: true
        },
        {
            text: "Bolivia",
            correct: false
        },
        {
            text: "Venezuela",
            correct: false
        },
        {
            text: "Ecuador",
            correct: false
        }
    ]
}

const placeholderQuestionTwo = {
    question: {
        text: "What´s the capital of Colombia?"
    },
    answers: [
        {
            text: "Medellín",
            correct: false
        },
        {
            text: "Bogota",
            correct: true
        },
        {
            text: "San Juan",
            correct: false
        },
        {
            text: "Moscú",
            correct: false
        }
    ]
}

const placeholderQuestionThree = {
    question: {
        text: "Which one is the flag of Russia?"
    },
    answers: [
        {
            flag: "https://restcountries.eu/data/col.svg",
            correct: false
        },
        {
            flag: "https://restcountries.eu/data/ecu.svg",
            correct: false
        },
        {
            flag: "https://restcountries.eu/data/rus.svg",
            correct: true
        },
        {
            flag: "https://restcountries.eu/data/per.svg",
            correct: false
        }
    ]
}





const Quiz = () => {
    const { question, answers } = placeholderQuestionOne;
    
    const answersAsGrid = answers.find(answer => answer.flag);
    
    return (
        <div id={styles.quiz}>
            <Question text={question.text} flag={question.flag} />
        
            <div id={answersAsGrid ? styles["quiz-answers-grid"] : styles["quiz-answers"]}>
                <Answer indicator="a." correct={answers[0].correct} answer={answers[0].text} flag={answers[0].flag} />
                <Answer indicator="b." correct={answers[1].correct} answer={answers[1].text} flag={answers[1].flag} />
                <Answer indicator="c." correct={answers[2].correct} answer={answers[2].text} flag={answers[2].flag} />
                <Answer indicator="d." correct={answers[3].correct} answer={answers[3].text} flag={answers[3].flag} />
            </div>
        </div>
    )
}

export default Quiz;