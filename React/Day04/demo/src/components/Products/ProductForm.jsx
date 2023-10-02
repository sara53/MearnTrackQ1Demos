import React, { useState, useEffect } from 'react'
import { addNewProduct, editPProduct, getProductById } from '../../API/ProductWithServer'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export function ProductForm() {


    let [ formsValues, setFormsValues ] = useState( {
        productName: '',
        price: '',
        quantity: ''
    } );
    const [ product, setProduct ] = useState( {} );

    let navigate = useNavigate();
    let { id } = useParams();

    useEffect( () => {


        if ( id != 0 ) {
            let fetchData = async () => {
                const response = await getProductById( id )
                setProduct( response.data )
                setFormsValues( response.data )

            }

            fetchData();
        }

        // setProduct( getProductById( id ) )
    }, [] )




    let getInputValue = ( e ) => {
        setFormsValues( {
            ...formsValues,
            [ e.target.name ]: e.target.value
        } )

    }
    let formOperation = ( e ) => {
        e.preventDefault();
        // addNewProduct( formsValues ) // static list
        if ( id == 0 ) {
            // add 
            addNewProduct( formsValues ).then( () => {
                navigate( '/products' )
            } )
        } else {
            // edit product
            editPProduct( id, formsValues ).then( () => {
                navigate( '/products' )

            } )
        }

    }
    return (
        <div className='bg-light p-5 mt-5 '>
            <div className="container">
                <h1>{id == 0 ? 'Add New Product' : 'Edit Product'}</h1>
                <form onSubmit={formOperation} >
                    <input onChange={getInputValue} value={formsValues.productName} name="productName" type="text" placeholder='Enter Product Name' className='form-control mb-3' />
                    <input onChange={getInputValue} value={formsValues.price} name='price' type="text" placeholder='Enter Product Price' className='form-control mb-3' />
                    <input onChange={getInputValue} value={formsValues.quantity} name="quantity" type="text" placeholder='Enter Product Quantity' className='form-control mb-3' />
                    <button className='btn btn-outline-success'>{id == 0 ? 'Add New Product' : 'Edit Product'}</button>
                </form>
            </div>

        </div>
    )
}
