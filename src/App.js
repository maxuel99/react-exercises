import React from "react";
import { Age } from "./Age";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Welcome age='23' />
            </div>
        )
    }
}