import React from 'react'

export default function Diff() {
    return (
        <div>
            <div>
                <div className="diff aspect-[16/9]">
                    <div className="diff-item-1">
                        <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">DAISY</div>
                    </div>
                    <div className="diff-item-2">
                        <div className="bg-base-200 text-9xl text-red-500 font-bold  grid place-content-center">DAISY</div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </div>
            <div className='m-8'>
                <div className="diff aspect-[16/9]">
                    <div className="diff-item-1">
                        <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />
                    </div>
                    <div className="diff-item-2">
                        <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg" />
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </div>

        </div>
    )
}
