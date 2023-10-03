import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { counterActions } from '../store/slices/counterSlice'
export default function Counter() {
    const { increase, decrease } = counterActions
    const { count } = useSelector( ( state ) => state.x )
    const dispatch = useDispatch();


    const increaseHandler = () => {
        dispatch( increase( 5 ) )
    }

    const decreaseHandler = () => {
        dispatch( decrease() )
    }
    return (
        <div className='bg-light p-5 text-center'>
            <h1>Counter Component : From took Kit</h1>
            <p> Count : {count}</p>
            <button className='btn btn-outline-success mx-1' onClick={increaseHandler}>+</button>
            <button className='btn btn-outline-danger mx-1' onClick={decreaseHandler}>-</button>
        </div>
    )
}
