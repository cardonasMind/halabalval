import React from "react";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";

import { StartGameButton } from "../../src/components";

interface RootState {
    score: number
}

const EndScreen = () => {
    const score = useSelector((state:RootState) => state.score);

    return (
        <div id={styles.end}>
            <div id={styles["end-content"]}>
                <h2 id={styles.title}>Game over</h2>

                <div id={styles.score}>
                    <h2>Your Score was</h2>
                    <h1>{score} points</h1>
                </div>

                <b>Another round?</b>
                <StartGameButton />
            </div>
        </div>
    )
}

export default EndScreen;