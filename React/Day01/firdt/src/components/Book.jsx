import { Component } from "react";

export class Book extends Component {

    render() {

        let { bookData: { price, title } } = this.props


        return (
            <div className="col-sm-4">
                <div className='rounded bg-light p-2 text-dark mt-3'>
                    <h2>{title}</h2>
                    <p className='lead'>Price: {price}$ </p>
                    <button className='btn btn-warning'>Buy Now </button>
                </div>
            </div>
        );
    }
}

