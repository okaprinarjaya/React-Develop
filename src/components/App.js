import React from "react"
import { Link } from "react-router"

const App = ({children}) => (
    <div>
        <ul role="nav">
            <li><Link to="/todolist/">Todo List</Link></li>
            <li><Link to="/puzzle/">Puzzle Math</Link></li>
            <li><Link to="/foo">Foo</Link></li>
            <li><Link to="/bar">Bar</Link></li>
        </ul>

        {children}
    </div>
)

export default App
