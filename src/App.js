import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CLickTracker } from "./ClickTracker ";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin ";
import { Welcome } from "./Welcome";

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
            </div>
        )
    }
}