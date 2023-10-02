import { async } from 'q';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { getAllProducts, deleteProduct } from '../../API/ProductWithServer'

import axios from 'axios'

// import { getAllProducts } from '../../API/productsAPI';

export function Products() {

    let [ myList, setMyList ] = useState( [] )

    useEffect( () => {

        // connect with api ---> return all products

        const fetchData = async () => {
            try {
                const response = await getAllProducts();
                setMyList( response.data )
            } catch ( error ) {
            }
        }

        fetchData()
        // setMyList( getAllProducts() )
    }, [] )




    let deleteHandler = ( productId ) => {
        // axois

        deleteProduct( productId ).then( () => {
            let filteredList = myList.filter( ( product ) => product.id != productId )
            setMyList( filteredList )
        } )
    }



    let productsList = myList.map( ( product ) => {
        return (

            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-warning mx-1'>View Product</NavLink>
                    <NavLink to={`/products/${product.id}/edit`} className='btn btn-outline-info mx-1'>Edit Product</NavLink>
                    <button className='btn btn-outline-danger mx-1' onClick={() => deleteHandler( product.id )}>Delete Product</button>
                </td>
            </tr>
        )
    }
    )


    return (
        <div className='text-center bg-light p-5 mt-5 '>
            <h2 className='mb-5'>Our Products</h2>
            <div className="container">
                {myList.length == 0 ?
                    <h1>No products To show</h1> :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsList}
                        </tbody>
                    </Table>
                }
            </div>
        </div>
    )
}
