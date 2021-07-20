import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { useRouter } from "next/router";

import { store } from "../../src/state";

const WelcomeScreen = () => {
    const router = useRouter();
    
    const startGame = () => {
        store.dispatch({ type: "START_GAME" });
        router.push("/");
    }
    
    useEffect(() => {
        if(store.getState().inGame) router.push("/");
    });
    
    return (
        <div id={styles["welcome-screen"]}>
            <img src="static/images/logo.png" alt="the Countries Quiz Game" />
            <button onClick={startGame}>click to Start!</button>

            <p>HALABALVAL It´s just a random word, like the style of this game.</p>
        </div>
    )
}

export default WelcomeScreen;