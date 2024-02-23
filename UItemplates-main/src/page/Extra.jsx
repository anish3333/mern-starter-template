import React from 'react'
import Countdown from '../components/Extra/Countdown'
import Collepse2 from '../components/Extra/Collepse2'
import Diff from '../components/Extra/Diff'
import Collepse1 from '../components/Extra/Collepse1'

function Extra() {
    return (
        <div>
            <div className='flex flex-col justify-center mx-auto w-fit m-2' >
                <div className='text-3xl text-center'> Countdown</div>
                <Countdown />

            </div>
            <div className='bg-black h-1 m-1' />
            <div className='flex flex-col justify-center mx-auto w-fit m-2' >
                <div className='text-3xl text-center'>Collepse1</div>
                <Collepse1 />

            </div>
            <div className='bg-black h-1 m-1' />
            <div className='flex flex-col justify-center mx-auto w-[80%] m-2' >
                <div className='text-3xl text-center'>Collepse1</div>
                <Collepse2 />

            </div>
            <div className='bg-black h-1 m-1' />

            <div className='flex flex-col justify-center mx-auto  w-[60%] m-2' >
                <div className='text-3xl text-center'>Diff</div>
                <Diff />

            </div>
            <div className='bg-black h-1 m-1' />
        </div>
    )
}

export default Extra