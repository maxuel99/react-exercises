import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementInterval,
                }
            })
        }, this.props.timeout)
    }

    render() {
        return <h1>
            Count: {this.state.count}
        </h1>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementInterval: 1,
    timeout: 1000
}