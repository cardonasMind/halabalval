import React from "react";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";

const Score = () => {
    return (
        <div id={styles.score}>
            <b>Your score is</b> <h4>{useSelector(state => state.score)} points</h4>
        </div>
    )
}

export default Score;
