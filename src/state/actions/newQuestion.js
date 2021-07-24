import axios from "axios";

import { store } from "../";

// Here is 20 countries to choose from, name key-value is just for me to know
const countries = [
    { code: "COL", name: "Colombia" }, { code: "AFG", name: "Afghanistan"}, { code: "BRA", name: "Brazil" },
    { code: "KHM", name: "Cambodia" }, { code: "CMR", name: "ASEAN" }, { code: "CAN", name: "Canada" },
    { code: "CPV", name: "Cabo Verde" }, { code: "CYM", name: "Cayman Islands" }, { code: "ITA", name: "Italy" },
    { code: "JOR", name: "Jordan" }, { code: "KEN", name: "Kenia" }, { code: "QAT", name: "Qatar" },
    { code: "KOS", name: "Republic of Kosovo" }, { code: "PRI", name: "Puerto Rico"}, { code: "SRB", name: "Serbia" }, 
    { code: "MRT", name: "Mauritania" }, { code: "SAU", name: "Saudi Arabia" }, { code: "SLE", name: "Sierra Leone" },
    { code: "SVN", name: "Slovenia" }, { code: "ZMB", name: "Zambia"}
];



const getCountryData = country => 
    axios(`https://restcountries.eu/rest/v2/alpha/${country}`)


const getQuestion = (questionType, name, flag) => {
    if(questionType === "CAPITAL_OF") {
        return {
            text: `What´s the capital of ${name}?`
        }
    } else if(questionType === "FLAG_OF") {
        return {
            flag,
            text: "This flag corresponds to?"
        }
    } else {
        return {
            text: `Which one is the flag of ${name}?`
        }
    }
}



const getAnswer = (questionType, correct, name, capital, flag) => {
    if(questionType === "CAPITAL_OF") {
        return {
            text: capital,
            correct
        }
    } else if(questionType === "FLAG_OF") {
        return {
            text: name,
            correct
        }
    } else {
        return {
            flag: flag,
            correct
        }
    }
}


const getWrongAnswersData = correctAnswerCode => {
    const countriesWithoutCorrectOne = countries.filter(country => country.code !== correctAnswerCode);
    
    return axios(`https://restcountries.eu/rest/v2/alpha?codes=${countriesWithoutCorrectOne[parseInt(Math.random()*19)].code};${countriesWithoutCorrectOne[parseInt(Math.random()*19)].code};${countriesWithoutCorrectOne[parseInt(Math.random()*19)].code}`);
}


const getWrongAnswers = (questionType, correctAnswerCode) => new Promise(resolve => {
    getWrongAnswersData(correctAnswerCode).then(result => {
        let wrongAnswers = [];
        
        result.data.forEach(wrongAnswer => {
            const { name, capital, flag } = wrongAnswer;
        
            wrongAnswers.push(getAnswer(questionType, false, name, capital, flag));
        });
        
        resolve(wrongAnswers);
    });
})


const shuffleAnswers = answers => {
    let currentIndex = answers.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]];
  }

  return answers;
}


const getAnswers = (questionType, correctAnswerName, correctAnswerCapital, correctAnswerFlag, correctAnswerCode) => {
    const correctAnswer = getAnswer(questionType, true, correctAnswerName, correctAnswerCapital, correctAnswerFlag);
    
    getWrongAnswers(questionType, correctAnswerCode).then(result => {
        const wrongAnswers = result;
        
        const answers = [correctAnswer, ...wrongAnswers];
    
        store.dispatch({
            type: "NEW_QUESTION",
            payload: {
                answers: shuffleAnswers(answers),
                selectedAnswerId: -1
            }
        });
    });
}



const newQuestion = async () => {
    const questionTypes = ["CAPITAL_OF", "FLAG_OF", "WHICH_FLAG"];
    
    // Select a country from the countries in the beginning
    const randomCountry = countries[parseInt(Math.random()*20)].code;
    
    
    const countryData = await getCountryData(randomCountry);
    const { name, capital, flag } = countryData.data;
    
    
    const randomQuestionType = questionTypes[parseInt(Math.random()*3)];
    
    
    const question = getQuestion(randomQuestionType, name, flag);
    
    
    // This function will do a new dispatch with the answers
    // Name, capital and flag corresponds to correct answer 
    getAnswers(randomQuestionType, name, capital, flag, randomCountry);
    
    store.dispatch({ 
        type: 'NEW_QUESTION', 
        payload: { 
            isLoaded: true, 
            question
        } 
    });
}

export default newQuestion;