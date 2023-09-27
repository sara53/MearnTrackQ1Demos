import React, { useState } from 'react'
import { CounterContext } from './counterContext'
import { MyNav } from '../components'
import { Products } from '../components/Products'
import App from '../App'

export function CounterProvider( props ) {

    let [ count, setCount ] = useState( 0 );

    let increase = () => {

        setCount( count + 1 )
    }

    let decrease = () => {
        setCount( count - 1 )
    }


    let data = {
        count,
        increase,
        decrease
    }
    return (
        <CounterContext.Provider value={data}>
            {props.children}
        </CounterContext.Provider>
    )
}
