import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'

const friendsPage = (state: AppStateType) => state.friendsPage

export const selectUserFriends = createSelector(
    [friendsPage],
    friendsPage => friendsPage.friends
)

export const selectUserFriendsAmount = createSelector(
    [selectUserFriends],
    selectUserFriends => selectUserFriends.length
)
