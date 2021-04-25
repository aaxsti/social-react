import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";
import {Users} from "./Users";

type UsersPagePropsType = {}

export const UsersPage: FC<UsersPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching);

    return <>
        {/*Code line down causes bad preloading look!*/}
        {isFetching ? <Preloader/> : null}
        <Users />
    </>
}