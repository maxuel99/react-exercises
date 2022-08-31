import React from "react";

export class TodoList extends React.Component {
    state = {
        item: [],
        todo: "",
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({
            [name]: value
        })
    }

    addNewItem = (event) => {
        this.setState({item: [...this.state.item, this.state.todo]})

        this.setState({todo: ""});

        event.preventDefault()
    }

    handleRemoveItem = () => {
        let { item, todo } = this.state;
        item.pop(todo);
        this.setState({item: item});

    }

    handleResetInput = () => {
        this.setState({
            item: [],
            todo: "",
        })
    }


    render() {
        return (
            <div>
                <h2 className="text-2xl font-bold underline ml-4 mb-2">My List</h2>
                <ul className="list-inside list-disc">
                    {this.props.items.map((item) => (
                        <li key={item.id}>{item.name}</li>))}
                    {this.state.item.map((subItems, subIndex) => (
                        <li key={subItems + subIndex}>{subItems}</li>))}
                </ul>
                <form onSubmit={this.addNewItem}>
                    <input name="todo" type="text" value={this.state.todo} className="mx-3 mt-3 mb-2 border border-black" onChange={this.handleInputChange} placeholder="--Add-item--" />
                    <button type="submit" className="border border-black rounded mr-1 bg-lime-500 px-1">Add</button>
                    <button type="reset" className="border border-black rounded mr-1 bg-white px-1" onClick={this.handleResetInput}>Reset</button>
                    <button type="button" className="border border-black rounded bg-red-500 px-1" onClick={this.handleRemoveItem}>Remove</button>
                </form>
            </div>
        )
    }
}