import React from "react";
import  { CounterButton }  from "./CounterButton";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    handleCounterIncrement= () => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy,
            }
        })
    }
    
    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <CounterButton onClick={this.handleCounterIncrement}/>
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    initialValue: 0,
    incrementBy: 1
}