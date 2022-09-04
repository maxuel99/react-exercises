export function Sum(props) {
    
    const sum = props.numbers.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    return (
        <h1 className="ml-4">{sum}</h1>
    )
}

//What happens if the numbers prop of the Sum component is not set? The value of sum is zero
//How can you set a default value for this prop?

Sum.defaultProps = {
    numbers: [2, 5, 3],
}