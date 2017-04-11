import { connect } from "react-redux"
import { createGetP } from 'redux-polyglot'
import TodoApp from "../components/TodoApp"

const TodoAppContainer = connect(
  (state) => {
    const { t: translate } = createGetP({allowMissing: true})(state)
    return {
      translate
    }
  }
)(TodoApp)

export default TodoAppContainer
