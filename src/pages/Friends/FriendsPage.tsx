import React, {FC} from "react";
import {useSelector} from "react-redux";
import {getIsFetching} from "../../redux/users-selectors";
import Preloader from "../../components/common/Preloader/Preloader";
import Friends from "./Friends";
import {Users} from "../../components/Users/Users";

type FriendsPagePropsType = {}

const FriendsPage: FC<FriendsPagePropsType> = (props) => {

    const isFetching = useSelector(getIsFetching);

    return <>
        {/*Code line down causes bad preloading look!*/}
        {isFetching ? <Preloader/> : null}
        <Friends />
    </>
}

export default FriendsPage;