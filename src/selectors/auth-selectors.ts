import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'

const auth = (state: AppStateType) => state.auth

export const selectIsAuth = createSelector(
    [auth],
    auth => auth.isAuth
)

export const selectCurrentUserLogin = createSelector(
    [auth],
    auth => auth.login
)

export const selectAuthorizedUserId = createSelector(
    [auth],
    auth => auth.userId
)

export const selectAuthorizedUserAvatar = createSelector(
    [auth],
    auth => auth.avatar
)

export const selectAuthorizedUserEmail = createSelector(
    [auth],
    auth => auth.email
)