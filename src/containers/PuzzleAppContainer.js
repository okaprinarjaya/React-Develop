import { connect } from "react-redux"
import { setOperation } from "../actions/actionCreators"
import PuzzleApp from "../components/PuzzleApp"

const mapStateToProps = (state) => {
    return state
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
