import axios from 'axios';
import { async } from 'q';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { getProductById } from '../../API/ProductWithServer'

export function ProductDetails() {

    let [ product, setProduct ] = useState( {} )
    const { id } = useParams();


    useEffect( () => {


        let fetchData = async () => {
            const response = await getProductById( id )
            setProduct( response.data )

        }

        fetchData();
        // setProduct( getProductById( id ) )
    }, [] )

    return (
        <div className='bg-dark text-light mt-5 p-5'>
            <h2>Product Details : {id}</h2>
            <p className='fs-3 lead mt-3'>Product Name : {product.productName}</p>
            <p className='fs-3 lead mt-3'>Product Price : {product.price}</p>
            <p className='fs-3 lead mt-3'>Product quantity : {product.quantity}</p>

            <NavLink to='/products' className='btn btn-warning mt-5'>Back to Products</NavLink>
        </div>
    )
}
