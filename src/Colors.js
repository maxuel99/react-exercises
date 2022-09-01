import React from "react";

export class Colors extends React.Component {
    render() {

        return (
            <div>
                <h2 className="text-2xl font-bold underline mx-3 mb-2">My Colors</h2>
                <ul className="list-inside list-disc">
                    {this.props.todos.map((todo) => (
                        <li key={todo.id}>{todo.name}</li>))}
                </ul>
            </div>
        )
    }
}