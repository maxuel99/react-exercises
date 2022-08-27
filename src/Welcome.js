import React from "react";

export class Welcome extends React.Component {
    render() {
        const name = 'Massimo'       //What happens if the name prop is a JSX expression instead of a string?  The value will be that, it will be determined
        return (                     //How do you pass a prop that contains a JSX expression? With curly brackets {...}
            <div>
                <p>Welcome, <strong>{name}</strong></p>
                <p>Your age is, {this.props.age}</p>
            </div>
        )
    }
}

//What happens if no name prop is passed to the Welcome component?
//nothing is displayed in HTML

//Can you set a default value for the name prop?

Welcome.defaultProps = {
    name: 'Massimo',
    age: 23
}