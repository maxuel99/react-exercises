import ReactDOM from 'react-dom/client'
import { App } from './App'
import React from 'react'
import { store } from './state/Store'
import './index.css'

/* import '../node_modules/react-bootstrap/dist/react-bootstrap' //script react-bootstap*/
import '../node_modules/bootstrap/dist/css/bootstrap.css'        /*css react-boostrap*/
import { BrowserRouter } from 'react-router-dom'
import { incrementCounter } from './state/CounterState'
import { addTodo, editTodo, removeTodo } from './state/TodoState'

const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )

// store.subscribe(() => {
//     console.log(store.getState())
// })

store.dispatch(incrementCounter(5))
store.dispatch(addTodo({ title: "Fare la spesa", id: 1, completed: false }))
store.dispatch(addTodo({ title: "Lavare la macchina", id: 2, completed: false }))
store.dispatch(addTodo({ title: "Fare i compiti", id: 3, completed: true }))
store.dispatch(removeTodo(3))
store.dispatch(incrementCounter(3))
store.dispatch(editTodo(1, { completed: true }))
store.dispatch(incrementCounter(2))
