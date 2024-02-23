import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar1() {
    return (
        <div>
            <div className='flex flex-col justify-center mx-auto w-fit m-2'>
                <div className='text-3xl text-center'>
                    Drawer
                </div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse placeat consequatur quam possimus vitae nesciunt? Blanditiis, officia voluptatum. Dicta saepe iste dolor deserunt distinctio itaque voluptatum, exercitationem perspiciatis magnam sequi!
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button ">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            <li>
                                <Link to="/">Sidebar Item 1</Link></li>
                            <li><Link to="/">Sidebar Item 2</Link></li>

                        </ul>
                    </div>
                </div>
                <div className='bg-black h-1 m-2' />

            </div>
        </div>
    )
}
