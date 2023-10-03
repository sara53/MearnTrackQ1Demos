import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../context/counterContext';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/slices/counterSlices';
export function Counter() {

    const { increase, decrease } = counterActions
    const { count } = useSelector( state => state.counter )
    const dispatch = useDispatch();


    return (
        <div className='bg-light p-5 text-center'>
            <h2>Counter Component</h2>
            <p>Count  :{count}  </p>

            <button className='btn btn-dark mx-1' >Toggle</button>
            <button onClick={() => dispatch( increase() )} className='btn btn-success mx-1' >Increase</button>
            <button onClick={() => dispatch( decrease() )} className='btn btn-danger mx-1' >Decrease</button>
        </div>
    )
}
