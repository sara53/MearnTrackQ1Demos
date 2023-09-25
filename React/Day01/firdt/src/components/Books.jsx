import React, { Component } from 'react'
import { Book } from './Book'
import { books } from '../models/bookList'
export class Books extends Component {
    render() {
        return (
            <div className='bg-dark p-5 text-center text-light'>
                <h2>Books List</h2>
                <div className="container">
                    <div className="row">
                        {books.map( ( book ) =>
                            <React.Fragment key={book.id}>

                                <Book bookData={book} />
                            </React.Fragment>

                        )}

                    </div>
                </div>
            </div>
        )
    }
}
