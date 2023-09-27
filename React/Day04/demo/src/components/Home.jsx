import React, { useContext } from 'react'
import { CounterContext } from '../context/counterContext'

export function Home() {

    let { fname } = useContext( CounterContext )
    return (
        <div className='alert alert-info p-5 mt-5'>
            <h1>Home Component : {fname}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum officiis nihil id rem, laboriosam praesentium ex cupiditate vero enim impedit doloremque quam reprehenderit ipsam rerum repellat repudiandae! Dolorum, vitae veritatis.</p>
        </div>
    )
}
