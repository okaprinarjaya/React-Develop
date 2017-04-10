import { createStore, applyMiddleware } from "redux"
import { createPolyglotMiddleware } from 'redux-polyglot'
import todoApp from "./reducers/reducers"

const languages = {
  "en": {
    "hello": "Hello",
    "math and magic in wonderland": "Math and Magic in Wonderland"
  },
  "fr": {
    "hello": "Bonjour",
    "math and magic in wonderland": "Les mathématiques et la magie au pays des merveilles"
  }
}

const polyglotMiddleware = createPolyglotMiddleware(
  '@@router/LOCATION_CHANGE',
  action => "fr",
  locale => new Promise(resolve => {
    resolve(languages[locale])
  })
)

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(polyglotMiddleware))

if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
        const nextRootReducer = require('./reducers/reducers').default
        store.replaceReducer(nextRootReducer)
    })
}

export default store
