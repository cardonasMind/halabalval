import React from "react";
import styles from "./index.module.scss";

const Answer = ({ selectAnswer, id, indicator, addStyle = null, answer, flag }) => {
    const answerStyle = addStyle !== null ? addStyle ? styles["answer-success"] : styles["answer-wrong"] : styles.answer;

    return (
        <div onClick={() => selectAnswer(id)} className={answerStyle}>
            <b>{indicator}</b> {flag ? <img src={flag} alt="Country flag" /> : <p>{answer}</p>}
        </div>
    )
}

export default Answer;