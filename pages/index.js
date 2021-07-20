import React, { PureComponent, Fragment } from "react";

import Router from "next/router";

import { store } from "../src/state";

import { Quiz, Score } from "../src/components";

export default class extends PureComponent {
    state = {
        inGame: null,
        actualQuestion: {}
    }

    componentDidMount() {
        const { inGame, actualQuestion } = store.getState();
        
        this.setState({ inGame, actualQuestion });
        
        if(inGame === false) Router.push("/welcome");
    }
    
    render() {
        const { inGame, actualQuestion } = this.state;
        
        if(inGame === null) return <b>Loading...</b>
        else {
            if(!inGame) return null;
            else return (
                <Fragment>
                    <Quiz {...actualQuestion} />
                    <Score />
                </Fragment>
            )
        }
    }
}