import React from 'react'
import { Message } from './Message'

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1 className="underline mx-3 mb-2">Hello, World!</h1> 
                <Message />
            </div>
        ) 
    }
}