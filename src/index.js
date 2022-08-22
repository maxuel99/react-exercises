import ReactDOM from 'react-dom'
import { HelloWorld } from "./HelloWorld"

const helloWorldElement = <HelloWorld />
const root = document.querySelector('#root')

ReactDOM.render(helloWorldElement, root)