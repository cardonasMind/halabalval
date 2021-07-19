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
    ]
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
    ]
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
    ]
}






const initialState = {
    inGame: false,



    actualQuestion: {
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
};

const reducer = (state, action) => {
    switch(action.type) {
        case "START_GAME":
            return {
                ...state, inGame: true
            }


        /*case "SELECT_ANSWER":
            return {
                ...state, selectedAnswerId: action.payload.id
            }*/


        default: 
            return {...state}
    }
}

export default createStore(reducer, initialState);