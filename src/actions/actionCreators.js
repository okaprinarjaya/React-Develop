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

export function setLocale(locale) {
  return {
    type: 'SET_LOCALE',
    payload: {locale: locale}
  }
}

export function commonDispatchMethod(param1) {
  console.log("common dispatch method called")
  
  return {
    type: 'SET_SOMETHING_COMMON',
    param: param1
  }
}
