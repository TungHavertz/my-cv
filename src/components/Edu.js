import React from 'react'
import './styles/edu.css'
function Edu() {
  return (
    <div className=' d-flex flex-column align-items-start justify-content-evenly edu-bg'>
        <h1 className='text-white'>Education</h1>
        <div className='row gy-5 d-flex justify-content-center'>
            <div className='col-lg-6 col-sm-12 d-flex flex-column align-items-start'> 
                <h3 className='text-white'>Thuy Loi University</h3>
                <h4 className='text-white'>-Ability to search and self-study</h4>
                <h4 className='text-white'>-Good communication and high teamwork.</h4>
                <h4 className='text-white'>-Basic English communication</h4>

            </div>
            <div className='col-lg-6 col-sm-12 d-flex flex-column align-items-start'>
                <h3 className='text-white'>Experience</h3>
                <h4 className='text-white'>-Completed multiple industry-recognized courses in web development and project management.</h4>
                <h4 className='text-white'>-Understand UI UX and be able to design interfaces.</h4>
            </div>
        </div>
    </div>
  )
}

export default Edu