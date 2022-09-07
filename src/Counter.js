import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
    const[counter, setCounter] = useState(props.initialValue)

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

    useEffect(() => {
        let interval = setInterval(() => {
            setCounter(counter => counter + props.incrementInterval);
        }, props.timeout);

            
        return() => clearInterval(interval)
  
    },[props.incrementInterval, props.timeout])        

    useEffect(() => {
        if ((counter > 10) && (counter > 10 * props.initialValue)) {
            setCounter(props.initialValue)
        }
    },[counter, props.initialValue]) 
    
    
    
    return (
        <CounterDisplay count={counter}/>
    )

}

Counter.defaultProps = {
    initialValue: 0,
    incrementInterval: 1,
    timeout: 1000
}