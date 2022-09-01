import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-title mx-3 mt-3 font-bold text-2xl italic">
                    {this.props.title}
                </div>
                <hr />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}