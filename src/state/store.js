import { createStore } from "redux";




// THIS WILL BE DELETED
const placeholderQuestionOne = {
    question: {
        text: "This flag corresponds to?",
        flag: "https://restcountries.eu/data/col.svg"
    },
    answers: [
        {
            text: "Colombia",
            correct: true
        },
        {
            text: "Bolivia",
            correct: false
        },
        {
            text: "Venezuela",
            correct: false
        },
        {
            text: "Ecuador",
            correct: false
        }
    ],
    selectedAnswerId: -1
}

const placeholderQuestionTwo = {
    question: {
        text: "What´s the capital of Colombia?"
    },
    answers: [
        {
            text: "Medellín",
            correct: false
        },
        {
            text: "Bogota",
            correct: true
        },
        {
            text: "San Juan",
            correct: false
        },
        {
            text: "Moscú",
            correct: false
        }
    ],
    selectedAnswerId: -1
}

const placeholderQuestionThree = {
    question: {
        text: "Which one is the flag of Russia?"
    },
    answers: [
        {
            flag: "https://restcountries.eu/data/col.svg",
            correct: false
        },
        {
            flag: "https://restcountries.eu/data/ecu.svg",
            correct: false
        },
        {
            flag: "https://restcountries.eu/data/rus.svg",
            correct: true
        },
        {
            flag: "https://restcountries.eu/data/per.svg",
            correct: false
        }
    ],
    selectedAnswerId: -1
}






const initialState = {
    inGame: false,



    actualQuestion: {
        question: {},
        answers: [],
        selectedAnswerId: -1
    },
    score: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case "START_GAME":
            return {
                ...state, inGame: true, actualQuestion: {...placeholderQuestionOne}
            }


        case "SELECT_ANSWER":
            return {
                ...state,
                actualQuestion: {...state.actualQuestion, selectedAnswerId: action.payload.id}
            }

        
        case "ADD_SCORE":
            return {
                ...state, score: state.score + 2
            }
            
            
        case "NEW_QUESTION":
            return {
                ...state, actualQuestion: {...placeholderQuestionThree}
            }


        default: 
            return {...state}
    }
}

export default createStore(reducer, initialState);