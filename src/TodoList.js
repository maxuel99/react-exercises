import React from "react";
import { useState } from "react";

// export class TodoList extends React.Component {
//     state = {
//         item: [],
//         todo: "",
//     }

//     handleInputChange = (event) => {
//         const value = event.target.value
//         const name = event.target.name

//         this.setState({
//             [name]: value
//         })
//     }

//     addNewItem = (event) => {
//         this.setState({item: [...this.state.item, this.state.todo]})

//         this.setState({todo: ""});

//         event.preventDefault()
//     }

//     handleRemoveItem = (e) => {
//         this.setState(state => {
//             const newItem = [...state.item];
//             newItem.splice(e.target.value, 1);
//             return { item: newItem };
//         })
//     }

//     handleResetInput = () => {
//         this.setState({
//             item: [],
//             todo: "",
//         })
//     }


//     render() {
//         return (
//             <div>
//                 <h2 className="text-2xl font-bold underline mx-3 mb-2">My List</h2>
//                 <ul className="list-inside list-disc">
//                     {this.props.items.map((item) => (
//                         <li key={item.id}>{item.name}</li>))}
//                     {this.props.children(this.state.item.map((subItems, subIndex) => (
//                         <li key={subItems + subIndex}>{subItems}
//                         <button value={subIndex} type="button" className="ml-2 border border-black rounded bg-red-500 px-1" onClick={this.handleRemoveItem}>Remove</button>
//                         </li>)))}
//                 </ul>
//                 <form onSubmit={this.addNewItem}>
//                     <input name="todo" type="text" value={this.state.todo} className="mx-3 mt-2 mb-3 border border-black" onChange={this.handleInputChange} placeholder="--Add-item--" />
//                     <br />
//                     <button type="submit" className="border border-black rounded ml-4 mr-1 mb-3 bg-lime-500 px-1">Add</button>
//                     <button type="reset" className="border border-black rounded mr-1 bg-white px-1" onClick={this.handleResetInput}>Reset</button>
//                 </form>
//             </div>
//         )
//     }
// }

export function TodoList(props) {
    const [item, setItem] = useState('')

    const itemHandler = (event) => {
        setItem(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(item === ''){
            return;
        }
        console.log(item)
        const itemData = {
            id: Math.random().toString(),
            name: item
        }
        props.onAddItem(itemData)
        setItem('')
    }


    return(
        <div>
            <h2 className="text-2xl font-bold underline mx-3 mb-2">My List</h2>
            <form onSubmit={submitHandler}>
                    <input name="todo" type="text" value={item} className="mx-3 mt-2 mb-3 border border-black" onChange={itemHandler} placeholder="--Add-item--" />
                    <br />
                    <button type="submit" className="border border-black rounded ml-4 mr-1 mb-3 bg-lime-500 px-1">Add</button>
            </form>
        </div>
    )
}