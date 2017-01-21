import React, {PropTypes} from 'react'
import Header from './header'
import {RaisedButton, Paper} from 'material-ui'

const Counter = ({counter, onIncrement, onDecrement}) => {
  return <div>
  <Header/>
    <Paper>
        <div className="count"> Count: {counter} <br/></div>
        <RaisedButton className="increment" onClick={onIncrement} secondary > + </RaisedButton>
        <RaisedButton className="decrement" onClick={onDecrement} primary > - </RaisedButton>
    </Paper>
  </div>
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter