import {questionUser} from "./functionReducer";

let initialState = {
    nameUser: '',
    exampleTasks: [] as Array<ExampType>,
    validateAnswerUser: [] as Array<AnswerUser>,
    authorized: false,
}

export const tasksReducer = (state = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'data/NAME':
            const questionsUser = questionUser()
            return {
                ...state,
                nameUser: action.name,
                exampleTasks: [...questionsUser[1]],
                validateAnswerUser: [...questionsUser[2]],
                authorized: true
            }
        case "data/ANSWER":
            return {
                ...state,
                validateAnswerUser: state.validateAnswerUser.map(a => {
                    if (a.id === action.id) return {
                        ...a,
                        answerUser: action.answer
                    }
                    return a
                })
            }
        case "data/TEST_ANSWER":
            return {
                ...state,
                validateAnswerUser: state.validateAnswerUser.map( (val,index) =>({
                    ...val,
                    answer: val.answerUser === state.exampleTasks[index].correctAnswers.answerUser
                }))
            }
        case "data/RESTART":
            const questionRestart = questionUser()
            return {
                ...state,
                exampleTasks: [...questionRestart[1]],
                validateAnswerUser: [...questionRestart[2]],
            }
        default:
            return state
    }
}
// AC
export const start = (name: string) => ({type: 'data/NAME', name} as const)
export const setAnswer = (id: number, answer: string) => ({type: 'data/ANSWER', id, answer} as const)
export const testAnswerUser = () => ({type: 'data/TEST_ANSWER'} as const)
export const restart = () => ({type: 'data/RESTART'} as const)

// Type
type TasksStateType = typeof initialState

export type ActionType =
    ReturnType<typeof start> |
    ReturnType<typeof setAnswer> |
    ReturnType<typeof testAnswerUser> |
    ReturnType<typeof restart>

export type ExampType = {
    id: number
    question: QuestionType,
    correctAnswers: AnswerUser
}
export type QuestionType = {
    term: number
    addend: number
    symbol: string
    equally: string
    answer?: boolean
}
export type AnswerUser = {
    id: number
    answerUser: string
    term: number
    addend: number
    symbol: string
    equally: string
    answer?: boolean
}







