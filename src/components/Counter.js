import { connect } from 'react-redux';
import * as ActionCreators from '../actions/counterCreator';

function Counter (props) {
  const { step, count, increment, decrement, onStepChange } = props;
  return (
    <div>
      <h1>Current count: {count}</h1>
      <input type='number' value={step} onChange={onStepChange} />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch(ActionCreators.increment()),
    decrement: () => dispatch(ActionCreators.decrement()),
    onStepChange: ({ target: { value } }) =>
      dispatch(ActionCreators.setStep(value)),
  };
};

/*
const withProps = connect(mapStateToProps);
const ComponentWithProps = withProps(App);
export default ComponentWithProps;

*/

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
