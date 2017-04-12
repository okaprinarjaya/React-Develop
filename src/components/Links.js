import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router"

const Links = ({ filterTodo, filterOption, onClick, children }) => {

    if ((filterTodo == filterOption) || (filterTodo === "" && filterOption === "SHOW_ALL")) {
        return (<span>{children}</span>)
    } else {
        return (
            <Link to={`/todolist/${filterOption}`} onClick={(e) => {
                e.preventDefault()
                onClick(filterOption)
            }}>
                {children}
            </Link>
        )
    }

}

Links.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Links
