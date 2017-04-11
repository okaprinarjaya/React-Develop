import React from "react"
import { Link } from "react-router"

const App = ({locale, onSetLocale, children}) => {
  return (
    <div>
        <ul role="nav">
            <li><Link to="/todolist/">Todo List</Link></li>
            <li><Link to="/puzzle/">Puzzle Math</Link></li>
            <li><Link to="/bar">Bar</Link></li>
        </ul>

        <button type="button" onClick={(x) => onSetLocale('en')}>Change lang to ENGLISH</button>
        <button type="button" onClick={(x) => onSetLocale('fr')}>Change lang to FRANCE</button>

        {children}
    </div>
  )
}

export default App
