const Todo = (props) => {
    return ( 
        <ul className="list-inside list-disc">
            {props.item.map((data, index) => (
                <li key={index}>{data.name}</li>
            ))}
        </ul>
     );
}
 
export default Todo;