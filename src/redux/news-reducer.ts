import {NewsElementType} from "../types/types";
import {InferActionsTypes} from "./store/redux-store";

let initialState = {
    news: [
        {
            title: 'Обновлен дизайн приложения',
            imageUrl: 'https://sun9-69.userapi.com/impg/AxxeCAiyethb_wtRT_Mb5kKtcZzP03r3M4zGuA/7RUUWX60C9k.jpg?size=1654x920&quality=96&sign=63d3c45b9b712da473f1163dc399557a&type=album',
            summary: `Была обнвлена страница профиля пользователя приложения, список пользователей, список друзей. Также 
                убраны баги связанные с профилем пользователя и списком друзей. На страницу профиля добавлено поле количества друзей 
                пользователя, исправлена работа лайков постов пользователя`,
            publishedAt: '04-06-2021'
        },
        {
            title: 'Добавлен поиск пользователей и пагинация',
            imageUrl: 'https://sun9-36.userapi.com/impg/2vy2rXeYUR5uk6OsDvQNmSTknBXX0wKANjXVFA/wnNNnA_QZus.jpg?size=625x603&quality=96&sign=fa931ca45802a1ac04b2c0771bb6b496&type=album',
            summary: `В раздел "Пользователи" было добавлено текстовое поле для поиска пользователей по имени и/или фамилии.
                Помимо текстового поля был добавлен раскрывающийся список с фильтрами поиска, такими как: поиск по друзьям, поиск всех пользователей
                а также поиск пользователей, которых нет у вас в друзьях.`,
            publishedAt: '21-03-2021'
        },
        {
            title: 'Добавлен раздел "Мои друзья"',
            imageUrl: 'https://sun9-34.userapi.com/impg/AND3E6RAo3VSnpSB6H1bItI0rQyaDpFUDPdqqA/kvs3rbDenZk.jpg?size=1093x786&quality=96&sign=269ee2ce00b189f82f74706be94f6d14&type=album',
            summary: `Создан раздел "Мои друзья" со списком добавленных пользователем друзей. Также разработана строка для поиска
                друзей по имени и/или фамилии.`,
            publishedAt: '04-04-2021'
        },
        {
            title: 'Добавлена возможность создавать посты',
            imageUrl: 'https://sun9-73.userapi.com/impg/xc9OitnHM3R2DYw6iqABWnjR3wDxv64bpkKaRA/bjunwNdyJC0.jpg?size=932x594&quality=96&sign=83d78f786cf9387b809f1c2bc8ef2545&type=album',
            summary: `Добавлена возможность создавать посты на собственных страницах профиля. Также имеется возможность
                "лайкать" созданные посты.`,
            publishedAt: '25-02-2021'
        }
    ] as Array<NewsElementType>
}

const newsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export const actions = {
    setNews: (data: Array<any>) => ({type: 'SN/NEWS/SET_NEWS', data} as const),
}

export default newsReducer;

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>