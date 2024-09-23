import React from 'react'
import './styles/footer.css'
function Footer() {
  return (
    <div id='footer' className='d-flex flex-column justify-content-around footer-bg'>
        <div className='row'>
            <div className='col'>
                <h1 className='footer-title'>Linkedin</h1>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
            </div>
            <div className='col'>
                <h1 className='footer-title'>Linkedin</h1>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
            </div>
            <div className='col'>
                <h1 className='footer-title'>Linkedin</h1>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
                <h5 className='footer-link'>Anh's profile</h5>
            </div>
        </div>
        <div className='d-flex justify-content-center'>
            <i class="fa-brands fa-github footer-icon pe-2"></i>
            <i class="fa-brands fa-linkedin-in footer-icon"></i>
        </div>
    </div>
  )
}

export default Footer