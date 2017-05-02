import { createStore, applyMiddleware, compose } from "redux"
import { createPolyglotMiddleware } from 'redux-polyglot'
import todoApp from "./reducers/reducers"
import { setLocale } from './actions/actionCreators'

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

/*const actionsShouldBeHandled = [
  '@@router/LOCATION_CHANGEOOO'
];

const locationChangeMiddleware = () => {
  return store => next => action => {
    next(action)
    const {type} = {action}

    if (actionsShouldBeHandled.includes(type)) {
      console.log('MASUK TYPE @@router/LOCATION_CHANGE')

      const {
        payload: {
          pathname,
          action: routeAction,
          query
        }
      } = action;

      if (routeAction === 'POP') {
        store.dispatch(setLocale("en"));
      }
    }
  }
}*/

const middlewares = [createPolyglotMiddleware(
  ['SET_LOCALE'],
  action => action.payload.locale,
  locale => new Promise(resolve => {
    resolve(languages[locale])
  })
)]

const appliedMiddleware = applyMiddleware(...middlewares);
const createReduxStore = compose(appliedMiddleware, window.devToolsExtension())
// const createReduxStore = appliedMiddleware
const store = createReduxStore(createStore)(todoApp, window.__INITIAL_STATE__);

if (module.hot) {
    module.hot.accept('./reducers/reducers', () => {
        const nextRootReducer = require('./reducers/reducers').default
        store.replaceReducer(nextRootReducer)
    })
}

export default store
