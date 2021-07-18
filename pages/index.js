import React, { PureComponent } from "react";

const Welcome = ({ startGame }) => 
    <div>
        <h1>Welcome</h1>
        <button onClick={startGame}>click to Start!</button>
    </div>

export default class extends PureComponent {
    state = { inGame: false }

    startGame = () => this.setState({ inGame: true });

    render() {
        const { inGame } = this.state;
        
        if(inGame === false) return <Welcome startGame={this.startGame} />
        else 
            return (
                <div>
                    <h1>THIS IS QUIZ</h1>
                </div>
            )
    }
}