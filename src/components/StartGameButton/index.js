import React from "react";
import styles from "./index.module.scss";

import { useRouter } from "next/router";

import { store } from "../../state";

const StartGameButton = () => {
    const router = useRouter();
    
    const startGame = () => {
        store.dispatch({ type: "START_GAME" });
        router.push("/");
    }
    
    return (
        <div id={styles["start-game-button"]} onClick={startGame}>
            click to Start!
        </div>
    )
}

export default StartGameButton;