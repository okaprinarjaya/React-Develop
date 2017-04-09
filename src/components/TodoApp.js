import React from "react"
import Footer from "./Footer"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

const TodoApp = () => (
    <div>
        <h1>Loe mau ngapain aje ma bro???</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default TodoApp
