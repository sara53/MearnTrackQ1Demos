import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BookItem( props ) {
    const { book } = props
    return (
        <div className="border p-3 rounded mt-5">
            <h2>{book.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores architecto autem cum corporis dolorum unde, adipisci doloremque illum quisquam culpa, iure vitae eos libero eum eius. Quis iusto quasi itaque.</p>
            <NavLink className='btn btn-info mx-1' to={`/books/${book.id}`}>View Book Details</NavLink>
            <button className='btn btn-warning mx-1'>Read Book</button>
        </div>
    )
}
