import React, { useState } from 'react'
import { addNewProduct } from '../../API/productsAPI'
import { useNavigate } from 'react-router-dom';
export function ProductForm() {

    let navigate = useNavigate();

    let [ formsValues, setFormsValues ] = useState( {
        productName: '',
        price: '',
        quantity: ''
    } );


    let getInputValue = ( e ) => {
        setFormsValues( {
            ...formsValues,
            [ e.target.name ]: e.target.value
        } )

    }
    let formOperation = ( e ) => {
        e.preventDefault();
        addNewProduct( formsValues )
        navigate( '/products' )

    }
    return (
        <div className='bg-light p-5 mt-5 '>
            <div className="container">
                <h1>Add New Product</h1>
                <form onSubmit={formOperation} >
                    <input onChange={getInputValue} value={formsValues.productName} name="productName" type="text" placeholder='Enter Product Name' className='form-control mb-3' />
                    <input onChange={getInputValue} value={formsValues.price} name='price' type="text" placeholder='Enter Product Price' className='form-control mb-3' />
                    <input onChange={getInputValue} value={formsValues.quantity} name="quantity" type="text" placeholder='Enter Product Quantity' className='form-control mb-3' />
                    <button className='btn btn-outline-success'>Add New Product</button>
                </form>
            </div>

        </div>
    )
}
