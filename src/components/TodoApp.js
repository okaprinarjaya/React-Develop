import React from "react"
import Footer from "./Footer"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

const TodoApp = ({translate}) => (
    <div>
        <h1>{translate('what things would you like to do')}</h1>
        <AddTodo translate={translate} />
        <VisibleTodoList translate={translate} />
        <Footer translate={translate} />
    </div>
)

export default TodoApp
