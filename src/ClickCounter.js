import React from "react";
import { useState } from "react";
import  { CounterButton }  from "./CounterButton";

// export class ClickCounter extends React.Component {
//     state = {
//         count: this.props.initialValue,
//     }

//     handleCounterIncrement= () => {
//         this.setState((state) => {
//             return {
//                 count: state.count + this.props.incrementBy,
//             }
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h3 className="mx-3">Count: {this.state.count}</h3>
//                 <CounterButton onClick={this.handleCounterIncrement}/>
//             </div>
//         )
//     }
// }

// ClickCounter.defaultProps = {
//     initialValue: 0,
//     incrementBy: 1
// }

export function ClickCounter({ initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    function handleCounterIncrement() {
        setCounter((c) => c + 1)
    }

    return (
        <div>
            <h3 className="mx-3">Count: {counter}</h3>
            <CounterButton onClick={handleCounterIncrement}/>
        </div>
    )
}