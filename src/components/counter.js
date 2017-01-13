import React, {PropTypes} from 'react'

const Counter = ({counter, onIncrement, onDecrement}) => {
  return <div className="count">
    {counter} <br/>
    <button className="increment" onClick={onIncrement}> + </button>
    <button className="decrement" onClick={onDecrement}> - </button>
  </div>
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter