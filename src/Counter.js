import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initialValue,
    }

    // constructor(props) {
    //     super(props)

    //     setInterval(() => {
    //         this.setState((state) => {
    //             return {
    //                 count: state.count + this.props.incrementInterval,
    //             }
    //         })
    //     })
    // }

    //Is the constructor still required? No, isn't

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementInterval,
                }
            })
        }, this.props.timeout)
    }

    render() {
        return <CounterDisplay count={this.state.count}/>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementInterval: 1,
    timeout: 1000
}