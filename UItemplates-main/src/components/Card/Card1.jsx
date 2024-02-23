import React from 'react'

function Card1() {
    return (
        <div>
            <div className='flex flex-col justify-center mx-auto w-fit m-2'>
                <div className='text-3xl text-center'>Card 1</div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-black h-1 m-1' />

        </div>
    )
}

export default Card1