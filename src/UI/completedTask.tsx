import React from 'react';
import css from './task.module.css'
import {AnswerUser} from "../state/tasksReducer";

type TaskPropsType = {
    task: AnswerUser
    color: boolean | undefined
}

export const OmpletedTask = (props: TaskPropsType) => {

    const valueUser = Object.values(props.task)
    valueUser.shift()

    return (
        <span style={{backgroundColor: props.color ? "lightgreen" : 'lightcoral'}} className={css.lineAnswer}>
            {
                valueUser.map((key, index) => (
                    <span
                        className={css.line_s}
                        key={index}
                    >
                        {typeof (key) !== 'boolean'
                            ? ''
                            : key
                                ? 'Correctly'
                                : 'Wrong Answer'
                        }
                        {key}
                    </span>
                ))
            }
        </span>
    );
};
