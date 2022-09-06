export function Sum(props) {
    
    const sum = props.numbers.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    return (
        <div>
            <h2 className="text-2xl font-bold underline mx-3 mb-2">The sum of "{props.numbers}" is:</h2>
            <h1 className="ml-4">{sum}</h1>
        </div>
    )
}

//What happens if the numbers prop of the Sum component is not set? The value of sum is zero
//How can you set a default value for this prop?

Sum.defaultProps = {
    numbers: [2, 5, 3],
}