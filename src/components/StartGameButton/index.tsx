import React from "react";
import styles from "./index.module.scss";

import { useRouter } from "next/router";

import { newQuestion } from "../../state/actions";
import { useDispatch } from "react-redux";

const StartGameButton = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    
    const startGame = () => {
        dispatch({ type: "START_GAME" });
        newQuestion()
        
        return router.push("/");
    }
    
    return (
        <div id={styles["start-game-button"]} onClick={startGame}>
            click to Start!
        </div>
    )
}

export default StartGameButton;