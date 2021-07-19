import React, { PureComponent, Fragment } from "react";
import Router from "next/router";

import { store } from "../src/state";

import { Quiz, Score } from "../src/components";

export default class extends PureComponent {
    state = {
        inGame: false,
        actualQuestion: {}
    }

    componentDidMount() {
        const { inGame } = this.state;
        store.subscribe(() => {
            const { inGame, actualQuestion } = store.getState();

            this.setState({ inGame, actualQuestion });
        });

        if(!inGame) Router.replace("/welcome");
    }

    render() {
        const { actualQuestion } = this.state;

            return ( <h1>FFF</h1>)
                {/*<Fragment>
                    <Quiz {...actualQuestion} />
                    <Score />
                </Fragment>
                )*/}
    }
}