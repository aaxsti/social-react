import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'

const dialogs = (state: AppStateType) => state.dialogs

export const selectDialogs = createSelector(
    [dialogs],
    dialogs => dialogs.dialogs
)