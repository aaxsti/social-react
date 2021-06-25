import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'
import {selectAuthorizedUserAvatar, selectAuthorizedUserId} from "./auth-selectors";

const dialogsPage = (state: AppStateType) => state.dialogsPage

export const selectDialogs = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.dialogs
)

export const selectDialogMessages = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.messages
)

export const selectDialogUserId = createSelector(
    [dialogsPage],
    dialogsPage => dialogsPage.selectedUserId
)

export const selectDialogUserData = (senderId: number) => createSelector(
    [selectDialogs, selectAuthorizedUserId, selectAuthorizedUserAvatar],
    (selectDialogs, userId, avatar) => {
        const findSenderUser = selectDialogs.find((dialog) => dialog.id === senderId)
        if (senderId === userId) return ['Вы', avatar]
        return [findSenderUser?.userName, findSenderUser?.photos.small]
    }
)