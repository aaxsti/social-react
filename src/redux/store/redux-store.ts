import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "../profile-reducer";
import dialogsReducer from "../dialogs-reducer";
import usersReducer from "../users-reducer";
import authReducer from "../auth-reducer";
import appReducer from "../app-reducer";
import chatReducer from "../chat-reducer";
import newsReducer from "../news-reducer";
import friendsReducer from "../friends-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    newsPage: newsReducer,
    usersPage: usersReducer,
    dialogsPage: dialogsReducer,
    chat: chatReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer;  // (globalState: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType> // Type that return RootReducerType

export type InferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store