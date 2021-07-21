import React from "react";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";

const Score = () => {
    const score = useSelector(state => state.score);
    
    return (
        <div id={styles.score}>
            <b>Your score is</b> <h4>{score} points</h4>
        </div>
    )
}

export default Score;
