import React from "react";

export class TodoList extends React.Component {
    state = {
        todo: '',
        item: []
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({[name]: value})
    }

    addNewItem = (event) => {
        this.setState({item: [...this.state.item, this.state.todo]});

        event.preventDefault()
    }


    render() {
        return (
            <div>
                <h2>My List</h2>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>{item.name}</li>))}
                    {this.state.item.map((subItems, sIndex) => (
                        <li key={subItems + sIndex}>{subItems}</li>))}
                </ul>
                <form onSubmit={this.addNewItem}>
                    <input name="todo" type="text" value={this.state.todo} onChange={this.handleInputChange} placeholder="--Add-item--" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}