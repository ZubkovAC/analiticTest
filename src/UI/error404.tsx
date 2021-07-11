import React from 'react';
import {NavLink} from 'react-router-dom';
import {RoutePath} from "../App";
import css from "./task.module.css";
import {restart} from "../state/tasksReducer";
import {useDispatch} from "react-redux";

export const Error404 = () => {
    const dispatch = useDispatch()

    const testing = () => {
        dispatch(restart())
    }

    return (
        <div>
            <h1>Error 404</h1>
            <NavLink
                to={RoutePath.HOME_RAGE}
                className={css.Link}
                onClick={testing}
            >
                Go Home
            </NavLink>
        </div>
    );
}


