import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewBook } from '../store/slices/bookSlice';
import { useNavigate } from 'react-router-dom';

export default function BookForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [ formsValues, setFormValues ] = useState( {
        title: '',
        price: '',
        quantity: ''
    } );

    const changeHandler = ( e ) => {
        setFormValues( {
            ...formsValues,
            [ e.target.name ]: e.target.value
        } )
    }
    const submitHandler = ( e ) => {
        e.preventDefault();
        dispatch( addNewBook( formsValues ) ).then( () => {
            navigate( '/books' )
        } )
    }
    return (
        <div className='alert alert-dark p-5 mt-5'>
            <div className="container">
                <form onSubmit={submitHandler} >
                    <input onChange={changeHandler} name="title" value={formsValues.title} type="text" className='form-control mt-2' placeholder='Enter Book Title' />
                    <input onChange={changeHandler} name="price" value={formsValues.price} type="text" className='form-control mt-2' placeholder='Enter Book Price' />
                    <input onChange={changeHandler} name="quantity" value={formsValues.quantity} type="text" className='form-control mt-2' placeholder='Enter Book Qunatity' />
                    <button className='btn btn-success mt-5'>Add New Book</button>
                </form>
            </div>
        </div>
    )
}
