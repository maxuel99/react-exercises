import React from "react";

export class TodoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: "",
            item: []
        }

    }

    addNewItem = (event) => {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            }

            this.setState((prevState) => {
                return {
                    item: prevState.item.concat(newItem)
                }
            })
        }
        this._inputElement.value = ""

        event.preventDefault()
    }


    render() {
        return (
            <div>
                <h2>My List</h2>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={item.id}>{item.name}</li>))}
                    {this.state.item.map((item) => (
                        <li key={item.key}>{item.text}</li>))}
                </ul>
                <form onSubmit={this.addNewItem}>
                    <input name="todo" type="text" ref={(a) => this._inputElement = a} placeholder="--Add-item--" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}