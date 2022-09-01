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

    handleResetInput = () => {
        this.setState({
            item: [],
            todo: "",
        })
    }


    render() {
        return (
            <div>
                <h2>My List</h2>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>{item.name}</li>))}
                    {this.state.item.map((subItems, subIndex) => (
                        <li key={subItems + subIndex}>{subItems}</li>))}
                </ul>
                <form onSubmit={this.addNewItem}>
                    <input name="todo" type="text" value={this.state.todo} onChange={this.handleInputChange} placeholder="--Add-item--" />
                    <button type="submit">Add</button>
                    <button type="reset" onClick={this.handleResetInput}>Reset</button>
                </form>
            </div>
        )
    }
}