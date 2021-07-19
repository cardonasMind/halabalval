import React, { PureComponent, Fragment } from "react";
import styles from "./index.module.scss";

import { store } from "../src/state";
import { Quiz, Score } from "../src/components";

const WelcomeScreen = ({ startGame }) => 
    <div id={styles["welcome-screen"]}>
        <img src="static/images/logo.png" alt="the Countries Quiz Game" />
        <button onClick={startGame}>click to Start!</button>

        <p>HALABALVAL It´s just a random word, like the style of this game.</p>
    </div>



export default class extends PureComponent {
    state = { inGame: false }

    startGame = () => setTimeout(() => this.setState({ inGame: true }), 100);

    render() {
        const { inGame } = this.state;
        
        if(inGame === false) return <WelcomeScreen startGame={this.startGame} />
        else 
            return (
                <Fragment>
                    <Quiz {...store.getState()} />
                    <Score />
                </Fragment>
            )
    }
}