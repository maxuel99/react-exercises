import { useCounter } from "./useCounter"

export function HookCounter({ initialValue = 0 }) {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <h2 className="text-2xl font-bold mx-3 mb-2">Counter: {counter}</h2>
            <button className="border border-black rounded ml-4 mr-1 mb-3 bg-lime-500 px-1" onClick={onIncrement}>Increment</button>
            <button className="ml-1 border border-black rounded bg-red-500 px-1" onClick={onDecrement}>Decrement</button>
            <button className="border border-black rounded mx-2 bg-white px-1" onClick={onReset}>Reset</button>
        </div>
    )
}