import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        const MyStyle = {
            backgroundColor: 'black',
            color: 'lightgreen'
        }

        return <h1 style={MyStyle}>
            Count: {this.props.count}
        </h1>
    }
}