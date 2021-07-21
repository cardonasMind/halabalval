import React, { useState } from "react";
import styles from "./index.module.scss";

import { useRouter } from "next/router";

import { store } from "../../state";

import Question from "./Question";
import Answer from "./Answer";

const Quiz = ({ question, answers, selectedAnswerId }) => {
    const router = useRouter();
    
    const [correctAnswerId, setCorrectAnswerId] = useState(null);

    const selectAnswer = id => {
        // Player hasn´t select an asnwer yet
        if(selectedAnswerId === -1) {
            store.dispatch({
               type: "SELECT_ANSWER",
                payload: {
                    id
                }
            });

            const answerIsCorrect = answers[id].correct

            if(answerIsCorrect) {
                store.dispatch({
                    type: "ADD_SCORE"
                });

                // ADD green background, 1 second, next question
                setCorrectAnswerId(id);
                
                setTimeout(() => {
                    store.dispatch({
                        type: "NEW_QUESTION"
                    });
                           
                    setCorrectAnswerId(null);  
                }, 1000);
            }

            else {
                // ADD RED background and select correct answer, 1 second, show fail screen
                setCorrectAnswerId(answers.indexOf(answers.find(answer => answer.correct)));
                
                setTimeout(() => router.push("/end"), 1000);
            }
        }
    }
    
    const answersAsGrid = answers.find(answer => answer.flag);

    const indicators = ["a.", "b.", "c.", "d."];
    
    return (
        <div id={styles.quiz}>
            <Question text={question.text} flag={question.flag} />
        
            <div id={answersAsGrid ? styles["quiz-answers-grid"] : styles["quiz-answers"]}>
                {
                    answers.map((answer, index) => {
                        const { text, flag } = answer;
                        const indicator = indicators[index];

                        let addStyle = null;

                        if(index === correctAnswerId) {
                            addStyle = true;
                        } else if (index === selectedAnswerId) {
                            addStyle = false;
                        }
                        
                        return <Answer key={index} selectAnswer={selectAnswer} id={index} indicator={indicator} addStyle={addStyle} answer={text} flag={flag} />
                    })
                }
            </div>
        </div>
    )
}

export default Quiz;