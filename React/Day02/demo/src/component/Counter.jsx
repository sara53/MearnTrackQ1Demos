import React, { Component } from 'react'

export default class Counter extends Component {

    constructor() {
        console.log( "1- ctor" )
        super();
    }

    componentDidMount() {
        console.log( "Comp did mount fired" )
    }

    componentDidUpdate() {
        console.log( "Update method fired" )
        console.log( this.state.count )
    }

    componentWillUnmount() {
        console.log( "unmouting" )
    }
    state = {
        count: 0,
        componentTitle: "Counter Component"
    }


    increase = () => {
        this.setState( {
            count: this.state.count + 1
        } )
    }

    decrease = () => {
        this.setState( {
            count: this.state.count - 1
        } )
    }



    changeTitle = () => {
        this.setState( {
            componentTitle: 'Mearn Track'
        } )
    }
    render() {
        console.log( "2-Render Called" )
        return (
            <div className='bg-light p-5 text-center'>
                <div className="container">
                    <h1>{this.state.componentTitle}</h1>
                    <p>Count : {this.state.count} </p>
                    <button onClick={this.changeTitle} className='btn btn-dark mx-1'>Change Title</button>
                    <button onClick={this.increase} className='btn btn-outline-success mx-1'>Increase</button>
                    <button onClick={this.decrease} className='btn btn-outline-danger mx-1'>Decrease</button>
                </div>
            </div>
        )
    }
}
