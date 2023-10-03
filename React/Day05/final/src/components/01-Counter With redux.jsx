import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseAction } from '../redux/actions/actions';

export default function Counter() {
    const { count } = useSelector( ( state ) => state.x )
    const dispatch = useDispatch();


    const increaseHandler = () => {
        dispatch( increaseAction() )
    }

    const decreaseHandler = () => {
        dispatch( { type: 'DECREASE', payload: 10 } )
    }
    return (
        <div className='bg-light p-5 text-center'>
            <h1>Counter Component</h1>
            <p> Count : {count}</p>
            <button className='btn btn-outline-success mx-1' onClick={increaseHandler}>+</button>
            <button className='btn btn-outline-danger mx-1' onClick={decreaseHandler}>-</button>
        </div>
    )
}
