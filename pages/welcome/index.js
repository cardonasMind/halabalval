import React from "react";
import styles from "./index.module.scss";

import { store } from "../../src/state";

const WelcomeScreen = () => {
    const startGame = () => store.dispatch({ type: "START_GAME" })

    return (
        <div id={styles["welcome-screen"]}>
            <img src="static/images/logo.png" alt="the Countries Quiz Game" />
            <button onClick={startGame}>click to Start!</button>

            <p>HALABALVAL It´s just a random word, like the style of this game.</p>
        </div>
    )
}

export default WelcomeScreen;