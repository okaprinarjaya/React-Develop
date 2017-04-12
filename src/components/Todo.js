import React from "react"
import PropTypes from 'prop-types'

class Todo extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    handlerClick()
    {
        this.props.onClick()
    }

    render()
    {
        return (
            <li
              onClick={() => this.handlerClick()}
              style={{textDecoration: this.props.completed ? "line-through" : "none"}}
            >
                {this.props.text}
            </li>
        )
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
