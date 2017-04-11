import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/actionCreators"

let AddTodo = ({ dispatch, translate }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value))
                input.value = ""
            }}>

                <input ref={node => {
                    input = node
                }} />

                <button type="submit">{translate('add')} Todo</button>

            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo
