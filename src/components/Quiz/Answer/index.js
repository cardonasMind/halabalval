import React, { useState } from "react";
import styles from "./index.module.scss";

const Answer = ({ selectAnswer, indicator, correct, answer, flag }) => {
    const [isCorrect, setIsCorrect] = useState(undefined);
    
    const handleAnswer = () => {
        if(correct) setIsCorrect(true);
        else setIsCorrect(false);
        
        selectAnswer(indicator);
    }
    
    return (
        <div className={isCorrect === undefined ? styles.answer : isCorrect ? styles["answer-success"] : styles["answer-wrong"]} onClick={handleAnswer}>
            <b>{indicator}</b> {flag ? <img src={flag} alt="Country flag" /> : <p>{answer}</p>}
        </div>
    )
}
export default Answer;