import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'
import {selectAuthorizedUserId} from "./auth-selectors";

const dialogsPage = (state: AppStateType) => state.dialogsPage

export const selectDialogs = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.dialogs
)

export const selectDialogMessages = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.messages
)

export const selectDialogUser = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.selectedUser
)

export const selectUserName = (senderId: number) => createSelector(
    [selectDialogs, selectAuthorizedUserId],
    (selectDialogs, userId) => {
        if (senderId === userId) return undefined
        else return selectDialogs.find((dialog) => dialog.id === senderId)?.userName
    }
)