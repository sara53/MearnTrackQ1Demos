import React, { useEffect } from 'react'

export function Login() {

    useEffect( () => {
        console.log( "Login First" )
        return () => {
            console.log( "clean up function Fired" )
        }
    }, [] )
    return (
        <div className=' mt-5 btn btn-dark p-5 text-light'>
            <h2>Login Component</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores similique animi molestias nulla? Minima, quisquam? Vero optio quas dolorum illum quaerat tempora maxime accusantium quos? Voluptas alias eum vero animi?</p>
        </div>
    )
}
