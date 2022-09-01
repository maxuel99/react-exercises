import React from "react";
import { Button } from 'react-bootstrap';

export class CounterButton extends React.Component {

    render() {
        return <Button variant="dark" className="mx-3" onClick={this.props.onClick}>Increment Counter</Button>
    }
}

