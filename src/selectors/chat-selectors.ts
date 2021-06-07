import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'

const chat = (state: AppStateType) => state.chat

export const selectChatStatus = createSelector(
    [chat],
    chat => chat.status
)

export const selectChatMessages = createSelector(
    [chat],
    chat => chat.messages
)