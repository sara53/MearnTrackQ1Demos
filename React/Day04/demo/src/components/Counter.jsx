import React, { useContext, useEffect, useState } from 'react'
import { CounterContext } from '../context/counterContext';
import { useToggle } from '../customHooks/useToggle'
export function Counter() {


    let [ show, toggle ] = useToggle();

    // let [ show, setShow ] = useState( false )
    let value = useContext( CounterContext );
    let { count, increase, decrease } = value;



    // let toggle = () => {
    //     setShow( !show )
    // }
    return (
        <div className='bg-light p-5 text-center'>
            <h2>Counter Component</h2>
            <p>Count : {count}  </p>
            {show && <p className='bg-dark text-light p-2 rounded'>This is my P</p>}
            <button className='btn btn-dark mx-1' onClick={toggle}>Toggle</button>
            <button onClick={() => increase()} className='btn btn-success mx-1' >Increase</button>
            <button onClick={() => decrease()} className='btn btn-danger mx-1' >Decrease</button>
        </div>
    )
}
