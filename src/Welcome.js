import React from "react";
import { Link } from "react-router-dom";
import { Age } from "./Age";

// export class Welcome extends React.Component {
//     render() {
//         const name = 'John'
//         return (
//             <div className="welcome mx-3">
//                 <p>Welcome <strong>{this.props.name}</strong></p>
//                 {this.props.age && this.props.age > 18 && this.props.age < 65 && name === 'John' &&
//                 <Age age={this.props.age}/>}
//             </div>
//         )
//     }
// }

//What happens if no name prop is passed to the Welcome component?
//nothing is displayed in HTML

//Can you set a default value for the name prop?

// Welcome.defaultProps = {
//     name: 'John'
// }

export function Welcome(props) {
    const name = 'John'
    return ( 
        <div className="welcome mx-3">
            <p>Welcome <strong>{name}</strong></p>
            {props.age && props.age > 18 && props.age < 65 && name === 'John' &&
            <Age age={props.age}/>}
            <Link to="/">Homepage</Link>
            <br />
            <Link to="/counter">Show the counter</Link>
            <br />
            <Link to="users/:username">Show Github's Usernames</Link>
        </div>
     );
}