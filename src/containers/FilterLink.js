import { connect } from "react-redux"
import { setFilterTodo } from "../actions/actionCreators"
import Links from "../components/Links"

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (filter) => dispatch(setFilterTodo(filter))
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Links)

export default FilterLink
