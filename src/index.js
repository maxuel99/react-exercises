import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'

/* import '../node_modules/react-bootstrap/dist/react-bootstrap' //script react-bootstap*/
import '../node_modules/bootstrap/dist/css/bootstrap.css'        /*css react-boostrap*/

const root = document.querySelector('#root')

ReactDOM.render(<App />, root)