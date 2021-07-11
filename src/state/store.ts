import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasksReducer";

const rootReducer = combineReducers({
    tasks:tasksReducer
})

export const store = createStore(rootReducer)


export type AppStateType = ReturnType<typeof rootReducer>