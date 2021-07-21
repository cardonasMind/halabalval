import React from "react";
import styles from "./index.module.scss";

import { store } from "../../src/state";

import { StartGameButton } from "../../src/components";

const EndScreen = () => {
    return (
        <div id={styles.end}>
            <div id={styles["end-content"]}>
                <h2 id={styles.title}>Game over</h2>

                <div id={styles.score}>
                    <h2>Your Score was</h2>
                    <h1>{store.getState().score} points</h1>
                </div>

                <b>Another round?</b>
                <StartGameButton />
            </div>
        </div>
    )
}

export default EndScreen;