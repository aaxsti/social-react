import {AppStateType} from "../redux/store/redux-store";
import { createSelector } from 'reselect'

const newsPage = (state: AppStateType) => state.newsPage

export const selectNews = createSelector(
    [newsPage],
    newsPage => newsPage.news
)

