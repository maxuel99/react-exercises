import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        const name = 'Massimo'
        return (
            <div>
                <p>Welcome, <strong>{name}</strong></p>
                <Age age={this.props.age}/>
            </div>
        )
    }
}

//What happens if no name prop is passed to the Welcome component?
//nothing is displayed in HTML

//Can you set a default value for the name prop?

Welcome.defaultProps = {
    name: 'Massimo'
}