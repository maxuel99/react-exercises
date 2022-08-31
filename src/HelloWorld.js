import React from 'react'
import { Message } from './Message'

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1 className="underline ml-4 mb-2">Hello, World!</h1> 
                <Message />
            </div>
        ) 
    }
}