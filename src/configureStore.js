import { createStore } from "redux"
import todoApp from "./reducers/reducers"

var store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
        const nextRootReducer = require('./reducers/reducers').default
        store.replaceReducer(nextRootReducer)
    })
}

export default store
