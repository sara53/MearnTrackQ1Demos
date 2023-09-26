import { useEffect, useState } from "react"
import { Login } from './Login'
export function Counter() {
    /**
     * 1 - component Did Mount
     *  2- component Did Update
     * 
     * -------------------------------
     * [] --> component Did Mount
     * [stateName] -->component Did Mount, component Did Update (stateName)
     * no second args --> component Did Mount & component Did Update
     * 3-
     * 
     */


    // React Hooks
    let [ count, setCount ] = useState( 0 );
    let [ title, setTitle ] = useState( 'Counter Component From State' );
    let [ show, setShow ] = useState( false );


    useEffect( function () {
        console.log( "First" )
    }, [] );


    useEffect( () => {

        console.log( "Mount" )
        console.log( "update [count]" )
    }, [ count ] )


    let increase = () => {
        setCount( count + 1 )

    }
    let decrease = () => {
        setCount( count - 1 )
    }

    let changeTitle = () => {
        setTitle( "Mearn Track" )
    }

    let toggle = () => {
        setShow( !show )
    }
    return (
        <div className='bg-light p-5 text-center'>
            {console.log( "1-Render Method" )}
            <div className="container">
                <h1>{title}</h1>
                <p>Count : {count} </p>

                {/* {
                    count < 0 ?
                        <p className="text-danger lead fs-3">Count Now Less Than Zero</p>

                        : null
                } */}

                {count < 0 &&

                    <p className="text-danger lead fs-3">Count Now Less Than Zero</p>

                }
                <button className="btn btn-primary " onClick={toggle}>Toggle</button>
                <button onClick={changeTitle} className='btn btn-dark mx-1'>Change Title</button>
                <button onClick={increase} className='btn btn-outline-success mx-1'>Increase</button>
                <button onClick={decrease} className='btn btn-outline-danger mx-1'>Decrease</button>

                {show && <Login />}
            </div>
        </div>
    )
}

