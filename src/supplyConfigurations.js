import React from 'react'

export default (configurations, TheComponent) => (props) => <TheComponent {...props} configurations={configurations} />
