import { Component } from "react";
import './book.css'
export class Book extends Component {

    flag = true
    render() {

        let { book, price } = this.props
        return (
            <div className="bookContainer">
                <h1>Book Component</h1>
                <img src="https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <h3>{book?.bookTitle || 'default title'}</h3>
                <p>Price : {book?.price ||
                    'default price'}$</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, recusandae!</p>

                <button>{this.flag ? "Buy Now " : 'Solid Out'}</button>
            </div>
        );
    }
}

