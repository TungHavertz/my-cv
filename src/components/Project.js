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
                    <h4 className='project-text'>Developed a dynamic e-commerce website for a startup.</h4>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 project-item'>
                    <h3 className='project-text'>Project 1</h3>
                    <h4 className='project-text'>Developed a dynamic e-commerce website for a startup.</h4>
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