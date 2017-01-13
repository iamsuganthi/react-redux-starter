import Counter from '../components/counter'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    }
  }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer