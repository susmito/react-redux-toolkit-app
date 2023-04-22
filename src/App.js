// import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { ADD_A_NODE, UPDATE_VALUE } from './@Redux/reducers/reducer1';
import Dashoboard from './component/Dashoboard';
// import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Dashoboard />
    </div>
  );
}

export default App;
