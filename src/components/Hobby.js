import React from 'react'
import './styles/hobby.css'
function Hobby() {
    return (
        <div className='d-flex justify-content-center p-5 hobby-bg'>
            <div className='bg-white w-75 h-100 d-flex flex-column align-items-start rounded-4'>
                <div className='d-flex flex-row justify-content-around w-100 h-100 pt-5'>
                    <div className='d-flex flex-column align-items-start mt-3 pt-3 '>
                        <h1 className='px-5'>My interesting</h1>
                        <div className='d-flex row px-5'>
                            <div className='col col-lg-4 col-sm-12'>
                            <i class="fa-solid fa-book-open"></i>
                                <h2>Learn new technologies </h2>
                                <h4>Embracing a lifelong journey of learning keeps the mind sharp and the spirit curious, opening doors to endless possibilities and personal growth.</h4>
                            </div>
                            <div className='col col-lg-4 col-sm-12'>
                            <i class="fa-solid fa-house-chimney-window"></i>
                                <h2>Spend time with family and friend </h2>
                                <h4>Spending quality time with family and friends is like watering the roots of happiness—it nurtures love, creates lasting memories, and strengthens the bonds that truly matter in life.</h4>
                            </div>
                            <div className='col col-lg-4 col-sm-12'>
                            <i class="fa-solid fa-futbol"></i>
                                <h2>Play football </h2>
                                <h4>Engaging in sports not only strengthens your body but also boosts your mental well-being, creating a harmonious balance for a healthier, happier life.</h4>
                            </div>
                        </div>
                        
                    </div>  

                    
                    
                    

                </div>
                

            </div>
        </div>
    )
}

export default Hobby