import React from "react";
import styles from "./index.module.scss";

const Answer = ({ indicator, correct, answer, flag = "" }) => 
    <div className={styles.answer}>
        <b>{indicator}</b> {flag !== "" ? <img src={flag} alt="Country flag" /> : <p>{answer}</p>}
    </div>

export default Answer;