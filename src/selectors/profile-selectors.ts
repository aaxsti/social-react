import {AppStateType} from "../redux/store/redux-store";
import {createSelector} from 'reselect'

const profilePage = (state: AppStateType) => state.profilePage

export const selectProfile = createSelector(
    [profilePage],
    profilePage => profilePage.profile
)

export const selectProfileStatus = createSelector(
    [profilePage],
    profilePage => profilePage.status
)

export const selectProfilePosts = createSelector(
    [profilePage],
    profilePage => profilePage.posts
)

export const selectProfileImage = createSelector(
    [selectProfile],
    selectProfile => selectProfile?.photos?.large
)
