import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import {OmpletedTask} from "./completedTask";
import css from './task.module.css'
import {AnswerUser, restart} from "../state/tasksReducer";
import {NavLink} from "react-router-dom";
import {RoutePath} from "../App";

export const AnswerTask = () => {

    const dispatch = useDispatch()
    const nameUser = useSelector<AppStateType, string>(state => state.tasks.nameUser)
    const validateAnswerUser = useSelector<AppStateType, Array<AnswerUser>>(state => state.tasks.validateAnswerUser)

    const restartQuestion = () => {
        dispatch(restart())
    }

    let score = 0
    for (let x = 0; x < validateAnswerUser.length; x++) {
        if (validateAnswerUser[x].answer) score++
    }

    return (
        <div>
            <div className={css.preTable}>
                <div className={css.Table}>
                    <h2>Answers to Tasks</h2>
                    <span>
                        {validateAnswerUser.map((task, index) => (
                            <div key={index}>
                                <OmpletedTask
                                    key={task.id}
                                    task={task}
                                    color={validateAnswerUser[index].answer}
                                />

                            </div>
                        ))
                        }
                        {
                            score <= 7
                                ? <div>
                                    <h2>{nameUser} - Молодец, Тренируйся и у тебя все получится!</h2>
                                    <h3>Правильных ответов: {score} , Ошибочных :{10 - score}</h3>
                                </div>
                                : <div>
                                    <h2>{nameUser} Красавчик , повторим еще?</h2>
                                    <h3>Правильных ответов: {score} , Ошибочных :{10 - score}</h3>
                                </div>
                         }
                    </span>
                    <div>
                        <NavLink
                            to={RoutePath.LEARN}
                            onClick={restartQuestion}
                            className={css.Link}
                        >
                            restart
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>


    );
};

