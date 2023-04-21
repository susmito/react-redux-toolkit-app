import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { ADD_A_NODE, UPDATE_VALUE } from './@Redux/reducers/reducer1';
import { useEffect } from 'react';

function App() {
  const reducer1 = useSelector(state => state?.reducer1 || {})
  const iAmANode = 'iAmANode'
  const { value, iAmANode: newNodeVal } = reducer1
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'LAUNCH_IT' })
  }, [])
  return (
    <div className="App">
      APP
      {[true, false].includes(value) ? <h3>{`Value - ${value}`}</h3> : <></>}
      {newNodeVal ? <h3>{`NewNodeVal - ${newNodeVal}`}</h3> : <></>}
      <button onClick={() => dispatch({ type: ADD_A_NODE, payload: iAmANode, val: 'newNode' })}>Click me to add a new node</button>
      <button onClick={() => dispatch({ type: UPDATE_VALUE })}>Update the bool!</button>
    </div>
  );
}

export default App;
