import { connect } from "react-redux"
import { toggleTodo } from "../actions/actionCreators"
import TodoList from "../components/TodoList"

const getVisibleTodos = (todos, filter) => {
    let filterFix = filter === "" ? "SHOW_ALL" : filter
    switch (filterFix) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.filterTodo)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
