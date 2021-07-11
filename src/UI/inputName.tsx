import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {start} from "../state/tasksReducer";
import {Input, Space} from "antd";
import 'antd/dist/antd.css';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../state/store";
import {RoutePath} from "../App";

const {Search} = Input

export const InputName = () => {

    const dispatch = useDispatch()
    const authorized = useSelector<AppStateType,boolean>(state => state.tasks.authorized)

    const changeName = (value: string) => {
        if(value.trim()){
            dispatch(start(value))
        }
    }

    if (authorized) return <Redirect to={RoutePath.LEARN}/>;

    return (
        <div>
            <Space direction="vertical">
                <h3>Введите свое имя :</h3>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={(value) => changeName(value)}
                />
            </Space>
        </div>
    );
};


