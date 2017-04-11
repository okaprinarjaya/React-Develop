import { combineReducers } from "redux"
import { polyglotReducer } from 'redux-polyglot'
import { LOCATION_CHANGE } from 'react-router-redux'

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    SET_OPERATION,
    SET_FILTER_TODO
} from "../actions/actionTypes"

const { SHOW_ALL } = VisibilityFilters

function todo(state = {}, action)
{
    switch (action.type) {
        case ADD_TODO:
            return {
                id: ("id" in state) ? (state.id + 1) : action.id,
                text: action.text,
                completed: false
            }

        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

function todos(state = [], action)
{
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(state.pop(), action)
            ]

        case TOGGLE_TODO:
            return state.map((t) => todo(t, action))

        default:
            return state
    }
}

function operation(state = "", action)
{
    if (action.type === SET_OPERATION) {
        return action.name
    }

    if (action.type === LOCATION_CHANGE) {
        let test = /^\/puzzle\//.test(action.payload.pathname)
        if (test) {
            const pathname = action.payload.pathname
            const [_, __, operation = ""] = pathname.split('/')

            return operation
        }
    }

    return state
}

// This initial state is *copied* from react-router-redux's routerReducer
// (the property name 'locationBeforeTransitions' is
// because this is designed for use with react-router)
const initialState = { locationBeforeTransitions: null };

function routing(state = initialState, action) {

    // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
    if (action.type === LOCATION_CHANGE) {
        return {...state, locationBeforeTransitions: action.payload }
    }

    // Here is our code to set the location state when the user chooses
    // a different option in the menu
    if (action.type === SET_OPERATION) {
        const { name } = action;
        let location = state.locationBeforeTransitions;

        const pathname = `/puzzle/${name}`;
        location = { ...location, pathname, action: 'PUSH' };

        return {...state, locationBeforeTransitions: location };
    }

    // Here is our code to set filter link state in todo-list module
    // when the user click a link filter type
    if (action.type === SET_FILTER_TODO) {
        const { filter } = action;
        let location = state.locationBeforeTransitions;

        const pathname = `/todolist/${filter}`;
        location = { ...location, pathname, action: 'PUSH' };

        return {...state, locationBeforeTransitions: location };
    }

    return state;
}

function filterTodo(state = "", action)
{
    if (action.type === SET_FILTER_TODO) {
        return action.filter
    }

    if (action.type === LOCATION_CHANGE) {
        let test = /^\/todolist\//.test(action.payload.pathname)
        if (test) {
            const pathname = action.payload.pathname
            const [_, __, filterTodo = ""] = pathname.split('/')

            return filterTodo
        }
    }

    return state
}

function locale(state = "en", action) {
  if (action.type === 'SET_LOCALE') {
    return action.payload.locale
  }

  return state
}

const todoApp = combineReducers({
    todos,
    operation,
    filterTodo,
    routing,
    locale,
    polyglot: polyglotReducer
})

export default todoApp
