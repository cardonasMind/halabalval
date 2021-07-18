import React from "react";
import styles from "./index.module.scss";

import Question from "./Question";
import Answer from "./Answer";

const placeholderQuestion = {
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

const Quiz = () => {
    const { question, answers } = placeholderQuestion;

    return (
        <div id={styles.quiz}>
            <Question text={question.text} flag={question.flag} />
        
            <div id={styles["quiz-answers"]}>
                <Answer indicator="a." correct={answers[0].correct} answer={answers[0].text} />
                <Answer indicator="b." correct={answers[1].correct} answer={answers[1].text} />
                <Answer indicator="c." correct={answers[2].correct} answer={answers[2].text} />
                <Answer indicator="d." correct={answers[3].correct} answer={answers[3].text} />
            </div>
        </div>
    )
}

export default Quiz;