import React from 'react'

function Card3() {
    return (
        <div>
            <div className='flex flex-col justify-center mx-auto w-fit m-2'>
                <div className='text-3xl text-center'>
                    Card 3
                </div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div><div className='bg-black h-1 m-1' />
        </div >
    )
}

export default Card3