import { connect } from 'react-redux'
import App from '../components/App'
import { setLocale } from '../actions/actionCreators'

const AppContainer = connect(
  (state) => {
    return {
      ...state
    }
  },
  (dispatch) => {
    return {
      onSetLocale: (locale) => dispatch(setLocale(locale))
    }
  }
)(App)

export default AppContainer
