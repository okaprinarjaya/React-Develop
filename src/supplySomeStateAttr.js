import { connect } from 'react-redux'

export default (component) => connect(
  (state) => {
    const operation = state.operation === '' ? 'Kosong' : state.operation
    return {
      operation: operation
    }
  }
)(component)
