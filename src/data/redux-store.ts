import { combineReducers, createStore} from "redux"
import {todoReducer} from "./todosReducer";

type TReducers = typeof reducers

export type TGlobalState = ReturnType<TReducers>

let reducers = combineReducers({
    todosData : todoReducer
})

export  const store = createStore(reducers)
