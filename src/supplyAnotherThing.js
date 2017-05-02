import React from 'react'

export default (anotherThing, TheComponent) => (props) => <TheComponent {...props} anotherThing={anotherThing} />
