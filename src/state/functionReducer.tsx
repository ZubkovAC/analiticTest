import {AnswerUser, ExampType} from "./tasksReducer";

export function questionUser() {
    const correctAnswers = []
    const answersUser = []
    for (let i = 0; i < 10; i++) {
        let arr = randomAnswer(i)
        correctAnswers.push(arr[1])
        answersUser.push(arr[2])
    }
    return {
        1: correctAnswers,
        2: answersUser
    }
}

export function calcAnswer(calculation: string, valueFirst: number, valueLast: number) {
    if (calculation === '+') return valueFirst + valueLast
    if (calculation === '-') return valueFirst - valueLast
    if (calculation === '*') return valueFirst * valueLast
    if (calculation === '/') return +(valueFirst / valueLast).toFixed(2)
    return 0
}

export function randomAnswer(index: number,) {
    const correctAnswers: AnswerUser = {
        id: index,
        answerUser: '',
        term: 0,
        addend: 0,
        symbol: '',
        equally: '='
    }
    const correctAnswer: ExampType = {
        id: index,
        question: {
            term: 0,
            symbol: '',
            addend: 0,
            equally: '='
        },
        correctAnswers: correctAnswers
    }

    let calculation = ''
    let term = Math.round(Math.random() * 100)
    let addend = Math.round(Math.random() * 100)
    let sumbol = Math.round(Math.random() * 100)
    if (sumbol >= 0 && sumbol <= 25) calculation = '+'
    if (sumbol >= 26 && sumbol <= 50) calculation = '-'
    if (sumbol >= 51 && sumbol <= 75) calculation = '*'
    if (sumbol >= 76 && sumbol <= 100) calculation = '/'
    correctAnswer.id = index
    correctAnswer.question.term = term
    correctAnswer.question.addend = addend
    correctAnswer.question.symbol = calculation
    const answer = calcAnswer(calculation, term, addend)
    correctAnswers.answerUser = answer.toString()

    const answerUser: AnswerUser = {
        id: index,
        term: 0,
        symbol: '',
        addend: 0,
        equally: '=',
        answerUser: ''
    }
    answerUser.term = term
    answerUser.addend = addend
    answerUser.symbol = calculation

    return {
        1: correctAnswer,
        2: answerUser
    }
}

