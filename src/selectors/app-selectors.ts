import {AppStateType} from "../redux/store/redux-store";
import {createSelector} from "reselect";

const app = (state: AppStateType) => state.app

export const selectInitialized = createSelector(
    [app],
    app => app.initialized
)
