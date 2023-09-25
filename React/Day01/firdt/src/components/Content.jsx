import React, { Component } from 'react'

export class Content extends Component {
    render() {
        let { bgClass } = this.props
        return (
            <div className={`${bgClass} p-5 ${bgClass == 'bg-dark' ? 'text-light' : 'text-dark'}`}>
                <div className='container'>

                    <h2>Content Component</h2>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum eaque quo facilis officiis debitis repellendus voluptatibus illo molestias exercitationem nemo corporis provident accusamus nulla consequatur dicta dolorem, repudiandae minus unde. sit amet conse</p>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
