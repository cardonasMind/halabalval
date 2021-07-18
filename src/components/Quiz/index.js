import React from "react";
import styles from "./index.module.scss";

import Question from "./Question";
import Answer from "./Answer";

const Quiz = () => 
    <div id={styles.quiz}>
        <Question />
    
        <div id={styles["quiz-answers"]}>
            <Answer indicator="a." correct={false} answer="Peru" />
            <Answer indicator="b." correct={true} answer="Colombia" />
            <Answer indicator="c." correct={false} answer="Venezuela" />
            <Answer indicator="d." correct={false} answer="Ecuador" />
        </div>
    </div>

export default Quiz;