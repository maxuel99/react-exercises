export function Sum(props) {
    
    const sum = props.number.reduce((accumulator, value) => {
        return accumulator + value;
    },0)

    return (
        <h1 className="ml-4">{sum}</h1>
    )
}