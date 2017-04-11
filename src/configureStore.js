import { createStore, applyMiddleware } from "redux"
import { createPolyglotMiddleware } from 'redux-polyglot'
import todoApp from "./reducers/reducers"

const languages = {
  "en": {
    "hello": "Hello",
    "math and magic in wonderland": "Math and Magic in Wonderland",
    "what things would you like to do": "What things would you like to do?",
    "add": "Add",
    "all": "All",
    "active": "Active",
    "completed": "Completed",
    "show": "Show"
  },
  "fr": {
    "hello": "Bonjour",
    "math and magic in wonderland": "Les mathématiques et la magie au pays des merveilles",
    "what things would you like to do": "Quelles choses aimeriez-vous faire?",
    "add": "Ajouter",
    "all": "Tout",
    "active": "Actif",
    "completed": "Terminé",
    "show": "Montrer"
  }
}

const polyglotMiddleware = createPolyglotMiddleware(
  ['SET_LOCALE'],
  action => action.payload.locale,
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
