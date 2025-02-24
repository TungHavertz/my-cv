import React from 'react'
import './styles/project.css'
function Project() {
  return (
    <div className=' d-flex justify-content-center project-bg'>
        <div className='d-flex flex-column align-items-start justify-content-evenly z-2 project-wrap'>
            <h1 className='project-title'>Personal Project</h1>
            <div className='row'>
                <div className='col-lg-4 col-md-6 col-sm-12 project-item'>
                    <h3 className='project-text'>Project 1</h3>
                    <h4 className='project-text'>
                        <a href='https://tunghavertz.github.io/js_ecommerce/' className='project-text text-decoration-none'>Developed a dynamic e-commerce website for a startup.</a>
                        
                    </h4>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 project-item'>
                    <h3 className='project-text'>Project 2</h3>
                    <h4 className='project-text'>

                        <a href='https://github.com/TungHavertz/Mobile-Store-Management' className='project-text text-decoration-none'>Winform phone sales management program</a>
                        
                        </h4>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 project-item'>
                    <h3 className='project-text'>Project 1</h3>
                    <h4 className='project-text'>Developed a dynamic e-commerce website for a startup.</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project