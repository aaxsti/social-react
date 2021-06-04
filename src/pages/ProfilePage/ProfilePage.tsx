import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStatus, getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {selectAuthorizedUserId, selectIsAuth} from "../../selectors/auth-selectors";
import styled from 'styled-components';
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import ProfilePosts from "../../components/Profile/ProfilePosts/ProfilePosts";
import {selectProfile} from "../../selectors/profile-selectors";
import Preloader from "../../components/common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const ProfilePageWrapper = styled.div`
  width: 100%;
`

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & {}

export const ProfilePage: FC<PropsType> = ({history, match}) => {
    const authorizedUserId = useSelector(selectAuthorizedUserId)
    const isAuth = useSelector(selectIsAuth)
    const profile = useSelector(selectProfile)

    const dispatch = useDispatch()

    const refreshProfile = () => {
        let userId: number | null = +match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                history.push("/login");
            }
        }
        if (!userId) {
            console.error("Id should exists in URI params or in state ('authorizedUserId')")
        } else {
            dispatch(getUserProfile(userId));
            dispatch(getStatus(userId));
        }
    }

    useEffect(() => {
        refreshProfile();
    }, [match.params.userId]);

    if (!profile) {
        return <Preloader/>
    }

    return (
        <ProfilePageWrapper>
            <ProfileInfo isOwner={!match.params.userId} profile={profile}/>
            {!match.params.userId ?
                <ProfilePosts/>
                : null}
        </ProfilePageWrapper>
    )
}

export default withAuthRedirect(withRouter(ProfilePage));