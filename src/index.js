import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import store from './configureStore'
import App from "./components/App"
import TodoApp from "./components/TodoApp"
import Bar from "./components/Bar"
import PuzzleAppContainer from './containers/PuzzleAppContainer'

const history = syncHistoryWithStore(browserHistory, store)

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="todolist/(:filterTodo)" component={TodoApp} />
                    <Route path="puzzle/(:operation)" component={PuzzleAppContainer} />
                    <Route path="bar" component={Bar} />
                </Route>
            </Router>
        </Provider>
    )
}

/*if (module.hot) {
    module.hot.accept('./components/App', () => {
        const AppNew = require('./components/App').default
        render(
            <RootApp TheApp={AppNew} />,
            document.getElementById("react-oprek")
        )
    })
}*/

if (module.hot) {
    module.hot.accept()
}

render(
    <RootApp />,
    document.getElementById("react-oprek")
)
