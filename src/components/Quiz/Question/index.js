import React from "react";
import styles from "./index.module.scss";

const Question = ({ text, flag }) => 
    <div id={styles.question}>
        {flag && <img src={flag} alt="Country flag" />}
        <h1>{text}</h1>
    </div>

export default Question;