import { createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterState";

export const store = createStore(counterReducer)

