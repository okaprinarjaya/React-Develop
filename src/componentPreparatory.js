import React from 'react'
import { connect } from 'react-redux'
import { commonDispatchMethod } from './actions/actionCreators'

export const supplyConfigMenubar = (configMenubar, TheComponent) => (props) => {
  return (
    <TheComponent {...props} configMenubar={configMenubar} />
  )
}

export const supplyTheNameAttrStateObj = (TheComponent) => {
  return connect(
    (state) => {
      return {
        theName: state.theName
      }
    }
  )(TheComponent)
}

export const supplyCommonActionDispatchMethod = (TheComponent) => {
  return connect(
    (state) => {
      return {}
    },
    (dispatch) => {
      return {
        commonDispatchMethodHandler: (theParam) => dispatch(commonDispatchMethod(theParam))
      }
    }
  )(TheComponent)
}
