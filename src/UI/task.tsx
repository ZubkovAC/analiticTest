import React, {ChangeEvent, useState} from 'react';
import {ExampType, setAnswer} from '../state/tasksReducer';
import {useDispatch} from "react-redux";
import css from './task.module.css'

type TablePropsType = {
    index: number
    task: ExampType
}
const styleInput = {
    width: '100px',
    margin: '10px'
}

export const Task = React.memo((props: TablePropsType) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)


    const keyUser = Object.values(props.task.question)

    const answerUser = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAnswer(props.index, e.currentTarget.value))
        setValue(e.currentTarget.value)
    }

    return (
        <div className={css.line}>
            {
                keyUser.map((task, index) =>(
                    <span className={css.cell} key={index}>{task}</span>
                ))
            }
            <input
                type="number"
                style={styleInput}
                onBlur={() => setError(true)}
                value={value}
                onChange={answerUser}
            />
            {error && !value && <span style={{color: 'red'}}>enter the value</span>}
        </div>
    );
})

