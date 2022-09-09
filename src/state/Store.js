import { combineReducers, createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterState";
import { todosReducer } from "./TodoState";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todosReducer
})

export const store = createStore(rootReducer)

