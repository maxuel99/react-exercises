import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CLickTracker } from "./ClickTracker ";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin ";
import { Welcome } from "./Welcome";

const todos = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'}
]

const items = [
    { id: 1, name: 'Fare la spesa'},
    { id: 2, name: 'Fare i compiti'},
    { id: 3, name: 'Lavare la macchina'},
    { id: 4, name: 'Lavarsi i denti'}
]

export class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Welcome age='23' />
                <Counter />
                <ClickCounter />
                <CLickTracker />
                <InteractiveWelcome />
                <Login />
                <UncontrolledLogin />
                <Colors todos={todos} />
                <TodoList items={items} />
            </div>
        )
    }
}