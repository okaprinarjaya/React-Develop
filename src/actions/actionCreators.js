import {
    ADD_TODO, 
    TOGGLE_TODO, 
    SET_OPERATION,
    SET_FILTER_TODO
} from "./actionTypes"

let nextTodoId = 0

export function addTodo(text)
{
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export function toggleTodo(id)
{
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function setOperation(name)
{
    return {
        type: SET_OPERATION,
        name
    }
}

export function setFilterTodo(filter)
{
    return {
        type: SET_FILTER_TODO,
        filter
    }
}
