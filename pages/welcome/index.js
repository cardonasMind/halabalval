import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";

import { useRouter } from "next/router";

import { StartGameButton } from "../../src/components";

const WelcomeScreen = () => {
    const router = useRouter();
    const inGame = useSelector(state => state.inGame);
    
    useEffect(() => {    
        if(inGame) router.push("/");
    });
    
    return (
        <div id={styles["welcome-screen"]}>
            <img src="static/images/logo.png" alt="The Countries Quiz Game" />
        
            <StartGameButton />

            <p>HALABALVAL It´s just a random word, like the style of this game.</p>
        </div>
    )
}

export default WelcomeScreen;