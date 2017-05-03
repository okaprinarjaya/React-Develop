import React from 'react'

const Bar = (props) => {
  props.anotherThing.canBeAFunction()
  props.commonDispatchMethodHandler()
  
  return (
    <div>
      <div>About Bar {`${props.locale}, ${props.configurations.cool}`}</div>
      <ul>
        <li>{props.configurations.oka}</li>
        <li>{props.configurations.lalala}</li>
        <li>{props.configurations.cacaca}</li>
        <li>{props.anotherThing.justObjectAttr}</li>
        <li>{props.operation}</li>
      </ul>
    </div>
  )
}

export default Bar
