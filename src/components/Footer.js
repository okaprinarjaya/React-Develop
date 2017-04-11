import React from "react"
import FilterLink from "../containers/FilterLink"

const Footer = ({translate}) => (
    <p>
        {translate('show')}:
        {" "} <FilterLink filterOption="SHOW_ALL">{translate('all')}</FilterLink>
        {", "} <FilterLink filterOption="SHOW_ACTIVE">{translate('active')}</FilterLink>
        {", "} <FilterLink filterOption="SHOW_COMPLETED">{translate('completed')}</FilterLink>
    </p>
)

export default Footer
