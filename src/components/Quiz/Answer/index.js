import React, { useState } from "react";
import styles from "./index.module.scss";

const Answer = ({ indicator, correct, answer, flag = "" }) => {
    const [answeredStyle, setAnsweredStyle] = useState(undefined);


    const handleAnswer = () => {
        if(correct) setAnsweredStyle(true)
        else setAnsweredStyle(false)
    }

    const ope = answeredStyle !== undefined ? answeredStyle ? "-success" : "-wrong" : ""

    return (
        <div className={styles.answer + ope} onClick={handleAnswer}>
            <b>{indicator}</b> {flag !== "" ? <img src={flag} alt="Country flag" /> : <p>{answer}</p>}
        </div>
    )
}
export default Answer;