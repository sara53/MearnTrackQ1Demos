import { useState } from "react"
import { Login } from './Login';

export function Counter() {

    let [ show, setShow ] = useState( false )
    let [ state, setState ] = useState( {
        count: 0,
        title: "component Title"
    } )


    let increase = () => {

        setState( {
            ...state,
            count: state.count + 1
        } )
    }
    let decrease = () => {
        setState( {
            ...state,
            count: state.count - 1
        } )
    }

    let changeTitle = () => {
        setState( {
            ...state,
            title: 'Mearn Track'
        } )
    }

    let toggle = () => {
        setShow( !show )
    }
    return (
        <div className='bg-light p-5 text-center'>
            {console.log( "Render Method" )}
            <div className="container">
                <h1>{state.title}</h1>
                <p>Count : {state.count}</p>

                {/* {
                    count < 0 ?
                        <p className="text-danger lead fs-3">Count Now Less Than Zero</p>

                        : null
                } */}

                {/* {count < 0 &&

                    <p className="text-danger lead fs-3">Count Now Less Than Zero</p>

                } */}
                <button onClick={toggle} className="btn btn-primary ">Toggle</button>
                <button onClick={changeTitle} className='btn btn-dark mx-1'>Change Title</button>
                <button onClick={increase} className='btn btn-outline-success mx-1'>Increase</button>
                <button onClick={decrease} className='btn btn-outline-danger mx-1'>Decrease</button>

            </div>
            {show && <Login />}<p>Test</p>
        </div>
    )
}

