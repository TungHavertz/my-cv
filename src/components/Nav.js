import React from 'react'
import '../styles/nav.css';
import { Link } from 'react-scroll';

function Nav() {
    return (
        <div id='nav' className='d-flex justify-content-center p-5 nav-img'>
            <div className='d-flex flex-column align-items-start justify-content-evenly z-2'>
                <h1 className='text-white'>Personal Landing Page</h1>
                <h4 className='text-white'>A welcoming space to showcase my journey, accomplishments, and aspirations.</h4>
                <div className='d-flex w-25'>
                    <Link to="intro" smooth={true} duration={200}>
                        <button type="button" class="btn px-3 me-1 fw-medium nav-btn1 ">Portfolio</button>
                    </Link>
                    <Link to="footer" smooth={true} duration={200}>
                        <button type="button" class="btn px-3 fw-medium nav-btn2 ">Contact</button> 
                    </Link>

                </div>

            </div>

        </div>
    )
}


export default Nav