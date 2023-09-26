export function Counter( props ) {
    let { title, children } = props

    return (
        <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1>{title}</h1>
                <p>Count : 0 </p>
                <button className='btn btn-dark mx-1'>Change Title</button>
                <button className='btn btn-outline-success mx-1'>Increase</button>
                <button className='btn btn-outline-danger mx-1'>Decrease</button>

            </div>
        </div>
    )
}