import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import css from './task.module.css'
import {AnswerUser, ExampType, testAnswerUser} from "../state/tasksReducer";
import {Task} from "./task";
import {NavLink} from "react-router-dom";
import {RoutePath} from "../App";

export const GenerateTasks = () => {
    const dispatch = useDispatch()

    const nameUser = useSelector<AppStateType, string>(state => state.tasks.nameUser)
    const exampleTasks = useSelector<AppStateType, Array<ExampType>>(state => state.tasks.exampleTasks)
    const validateAnswerUser = useSelector<AppStateType, Array<AnswerUser>>(state => state.tasks.validateAnswerUser)

    const testing = () => {
        dispatch(testAnswerUser())
    }

    const disabled = validateAnswerUser.some(v => !v.answerUser)

    return (
        <div>
            <div className={css.preTable}>
                <h2>{nameUser}</h2>
                <div>
                    <h2>Solve the Tasks:</h2>
                    <h4>* при делении: 2 знака после точки</h4>
                    <div>
                        {
                            exampleTasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index}/>))
                        }
                    </div>
                    <div style={{margin:'15px'}}>
                        <NavLink
                            to={RoutePath.ANSWER}
                            className={!disabled? css.Link : css.LinkDisable}
                            onClick={testing}
                        >
                            testing
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

