import React, { useState } from 'react'

export default function Register( props ) {

    let { formValues, setFormValues } = props



    // let [ username, setUsername ] = useState( '' )
    // let [ age, setAge ] = useState( '' )


    // let getUsernameValue = ( e ) => {
    //     setUsername( e.target.value )
    // }

    let getInputValue = ( e ) => {
        setFormValues( {
            ...formValues,
            [ e.target.name ]: e.target.value
        } )
    }

    // let getAgeValue = ( e ) => {
    //     setAge( e.target.value )
    // }

    let register = ( e ) => {
        e.preventDefault();

        console.log( formValues )
    }
    return (
        <div className='bg-dark text-light p-5 '>
            <h3>Register component</h3>
            <div className="container">
                <form onSubmit={register}>
                    <input value={formValues.username} onChange={getInputValue} type="text" className='form-control' name='username' placeholder='Enter Your Username' />

                    <input value={formValues.age} onChange={getInputValue} type="text" className='form-control mt-4' name='age' placeholder='Enter Your Age' />
                    <button className='btn btn-outline-warning mt-3'>Register</button>
                </form>
            </div>

        </div>
    )
}
