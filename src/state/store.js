import { createStore } from "redux";

const initialState = {
    inGame: false,



    actualQuestion: {
        isLoaded: false,
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
                ...initialState, inGame: true
            }


        case "NEW_QUESTION":
            return {
                ...state, actualQuestion: { ...state.actualQuestion, ...action.payload }
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
            

        default: 
            return {...state}
    }
}

export default createStore(reducer, initialState);