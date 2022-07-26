import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { decreamentCounter, increamentCounter, resetCounter } from '../services/actions/counterAction';

const Counts = () => {
    const count = useSelector((state)=> state.count) //import from redux to find the state
    const  dispatch = useDispatch(); //import from redux to get dispatch
    const handleIncrement = () =>{
        dispatch(increamentCounter())
    }
    const handleReset = () =>{
        dispatch(resetCounter())
    }
    const handleDecrement = () =>{
        dispatch(decreamentCounter())
    }
    return (
        <div>
            <h2>This is count app {count}</h2>
            <button onClick={handleIncrement}>incremane</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrement}>decrement</button>
        </div>
    );
};

export default Counts;


/* 
1. state -count : 0
2. actions - increment, decrement, reset
3. reducers - increment -> count => count + 1
            - decrement -> count => count - 1
            -reset -> count => 0
4. store
5. take the store to the provider in index.js
6. import useSelector 
7. import useDispatch
10. use the state and counter to the right place. 
*/