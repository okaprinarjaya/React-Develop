import { connect } from "react-redux"
import { createGetP } from 'redux-polyglot'
import { setOperation } from "../actions/actionCreators"
import PuzzleApp from "../components/PuzzleApp"

const mapStateToProps = (state) => {
    const { t: translate } = createGetP({allowMissing: true})(state)
    return {
      ...state,
      translate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeOperation: (name) => dispatch(setOperation(name))
    }
}

const PuzzleAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PuzzleApp)

export default PuzzleAppContainer
