import React from "react"
import FilterLink from "../containers/FilterLink"

const Footer = () => (
    <p>
        Show: 
        {" "} <FilterLink filterOption="SHOW_ALL">All</FilterLink>
        {", "} <FilterLink filterOption="SHOW_ACTIVE">Active</FilterLink>
        {", "} <FilterLink filterOption="SHOW_COMPLETED">Completed</FilterLink>
    </p>
)

export default Footer
