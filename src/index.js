import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import store from './configureStore'
import AppContainer from "./containers/AppContainer"
import TodoAppContainer from "./containers/TodoAppContainer"
import BarContainer from "./containers/BarContainer"
import PuzzleAppContainer from './containers/PuzzleAppContainer'

const history = syncHistoryWithStore(browserHistory, store)

const RootApp = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={AppContainer}>
                    <Route path="todolist/(:filterTodo)" component={TodoAppContainer} />
                    <Route path="puzzle/(:operation)" component={PuzzleAppContainer} />
                    <Route path="bar" component={BarContainer} />
                </Route>
            </Router>
        </Provider>
    )
}

/*if (module.hot) {
    module.hot.accept('./containers/AppContainer', () => {
        const AppNew = require('./containers/AppContainer').default
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
