import React from 'react'
import './styles/intro.css';

function Intro() {
    return (
        <div id='intro' className='d-flex justify-content-center p-5 intro-bg'>
            <div className='bg-white w-75 h-100 d-flex flex-column align-items-start  rounded-4'>
                <div className='d-flex flex-row justify-content-around w-100 h-100 pt-5'>
                    <div className='d-flex flex-column align-items-start pt-4'>
                        <h1>Introduction</h1>
                        <h4>Name: Pham Tung Anh</h4>
                        <div className='d-flex'>
                            <h4>Email:</h4>
                            <h4>
                                <a href="mailto:phamtunganh27@gmail.com" className='text-decoration-none ms-1'>phamtunganh27@gmail.com</a>
                            </h4>
                        </div>
                        <div className='d-flex'>
                            <h4>Phone:</h4>
                            <h4>
                                <a href="tell:+0344956830" className='text-decoration-none ms-1'>0344956830</a>
                            </h4>
                        </div>
                        
                    </div>  

                    
                    <div className='intro-img'></div>
                    

                </div>
                <div></div>

            </div>
        </div>
    )
}

export default Intro