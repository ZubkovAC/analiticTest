import React, {ReactNode} from "react";
import {RoutePath} from "../App";
import {useSelector} from "react-redux";
import {AppStateType} from "../state/store";
import { Redirect } from "react-router-dom";

type AuthorizedPropsType = {
    children: ReactNode
}

export const Authorized = (props:AuthorizedPropsType) =>{

    const authorized = useSelector<AppStateType, boolean>(state => state.tasks.authorized)
    if (!authorized) return <Redirect to={RoutePath.HOME_RAGE}/>;
    return (
        <div >
            {props.children}
        </div>
    )
}