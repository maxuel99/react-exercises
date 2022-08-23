import React from "react";

export class Welcome extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}</p>
    }
}

//What happens if no name prop is passed to the Welcome component?
//nothing is displayed in HTML

//Can you set a default value for the name prop?

Welcome.defaultProps = {
    name: 'Massimo'
}