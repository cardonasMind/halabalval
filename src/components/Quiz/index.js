import React from "react";
import styles from "./index.module.scss";

import { store } from "../../state";

import Question from "./Question";
import Answer from "./Answer";

const Quiz = ({ question, answers, selectedAnswerId }) => {
    const selectAnswer = indicator => {
        if(selectedAnswerId === -1) {
            const indicators = ["a.", "b.", "c.", "d."];
            const indicatorToId = indicators.indexOf(indicator);

            store.dispatch({
               type: "SELECT_ANSWER",
                payload: {
                    id: indicatorToId
                }
            });
        } else {
            alert("YA")
        }
        
        
        
        
        /*if(correct) alert("GREAT SUCCESS!");
        else {
            const correctAnswerIs = answers.indexOf(answers.find(answer => answer.correct === true));
            
            alert("Correct answer is index: " + correctAnswerIs);
        }*/
    }
    
    const answersAsGrid = answers.find(answer => answer.flag);
    
    return (
        <div id={styles.quiz}>
            <Question text={question.text} flag={question.flag} />
        
            <div id={answersAsGrid ? styles["quiz-answers-grid"] : styles["quiz-answers"]}>
                <Answer selectAnswer={selectAnswer} indicator="a." correct={answers[0].correct} answer={answers[0].text} flag={answers[0].flag} />
                <Answer selectAnswer={selectAnswer} indicator="b." correct={answers[1].correct} answer={answers[1].text} flag={answers[1].flag} />
                <Answer selectAnswer={selectAnswer} indicator="c." correct={answers[2].correct} answer={answers[2].text} flag={answers[2].flag} />
                <Answer selectAnswer={selectAnswer} indicator="d." correct={answers[3].correct} answer={answers[3].text} flag={answers[3].flag} />
            </div>
        </div>
    )
}

export default Quiz;