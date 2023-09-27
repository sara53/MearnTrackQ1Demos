import React, { useEffect, useState } from 'react'
import { useFetch } from '../customHooks/UseFetch'

export function Users() {

    let [ users, isLoading, errors ] = useFetch( "https://jsonplaceholder.typicode.com/users" );



    return (
        <div className='bg-light mt-5  p-5 text-center'>
            <div className="container">
                <h2>Users List</h2>
                {isLoading && <h1>Loading</h1>}
                {!isLoading && !errors && users.map( ( user ) => {
                    return ( <h1 key={user.id} className='bg-dark p-3 mb-2 text-light'>{user.name}</h1> )
                } )}
            </div>
        </div>
    )
}
