import React, { PureComponent } from "react";
import styles from "./index.module.scss";

import { connect } from "react-redux";
import { newQuestion } from "../../state/actions";

import Router from "next/router";

import Question from "./Question";
import Answer from "./Answer";

class Quiz extends PureComponent {
    state = {
        correctAnswerId: null
    }

    setCorrectAnswerId = id => this.setState({ correctAnswerId: id })

    render () {
        const { isLoaded, question, answers, selectedAnswerId, dispatch } = this.props;
        
        const selectAnswer = id => {
            // Player hasn´t select an asnwer yet
            if(selectedAnswerId === -1) {
                dispatch({ type: "SELECT_ANSWER", payload: { id } });

                const answerIsCorrect = answers[id].correct

                if(answerIsCorrect) {
                    dispatch({ type: "ADD_SCORE" });

                    // ADD green background, 1 second, next question
                    this.setCorrectAnswerId(id);

                    setTimeout(() => {
                        newQuestion();

                        this.setCorrectAnswerId(null);  
                    }, 1000);
                }

                else {
                    // ADD RED background and select correct answer, 1 second, show fail screen
                    this.setCorrectAnswerId(answers.indexOf(answers.find(answer => answer.correct)));

                    setTimeout(() => Router.push("/end"), 1000);
                }
            }
        }
        
        const { correctAnswerId } = this.state;
        
        const answersAsGrid = answers.find(answer => answer.flag);

        const indicators = ["a.", "b.", "c.", "d."];
        
        if(!isLoaded) return <b>Generating question...</b>
        else return (
            <div id={styles.quiz}>
                <Question text={question.text} flag={question.flag} />

                <div id={answersAsGrid ? styles["quiz-answers-grid"] : styles["quiz-answers"]}>
                    {
                        answers.map((answer, index) => {
                            const { text, flag } = answer;
                            const indicator = indicators[index];

                            let addStyle = null;

                            if(index === correctAnswerId) {
                                addStyle = true;
                            } else if (index === selectedAnswerId) {
                                addStyle = false;
                            }

                            return <Answer key={index} selectAnswer={selectAnswer} id={index} indicator={indicator} addStyle={addStyle} answer={text} flag={flag} />
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state.actualQuestion
});

export default connect(mapStateToProps)(Quiz);