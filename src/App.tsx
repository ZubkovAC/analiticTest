import React from 'react';
import './App.css';
import {GenerateTasks} from "./UI/generateTasks";
import {InputName} from "./UI/inputName";
import { Route, Switch} from "react-router-dom";
import {AnswerTask} from './UI/answerTask';
import {Error404} from "./UI/error404";
import {Authorized} from "./utils/Redirect";

export const RoutePath = {
    HOME_RAGE: '/',
    LEARN: "/learn",
    ANSWER: '/answer',
    ERROR_404: '*',
}

export const App = () => {

    return (
        <div className="App">
             <Switch>
                <Route exact path={RoutePath.HOME_RAGE} render={() =><InputName />} />
                <Route exact path={RoutePath.LEARN} render={() => <Authorized children={<GenerateTasks />} /> }/>
                <Route exact path={RoutePath.ANSWER} render={() =><Authorized children={<AnswerTask />}/> }/>

                <Route path={RoutePath.ERROR_404} render={() => <Error404/>}/>
            </Switch>
        </div>
    );
}
