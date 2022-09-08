import ReactDOM from 'react-dom/client'
import { App } from './App'
import React from 'react'
import './index.css'

/* import '../node_modules/react-bootstrap/dist/react-bootstrap' //script react-bootstap*/
import '../node_modules/bootstrap/dist/css/bootstrap.css'        /*css react-boostrap*/
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)