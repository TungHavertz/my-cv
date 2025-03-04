import React from 'react'
import './styles/object.css'
function Object() {
  return (
    <div className='obj-wrap w-75 '>
        <h1 className='obj-tilte'>Object</h1>

      <div className=" row gx-1 d-flex justify-content-around ms-lg-5 ps-lg-5">
        <div className='col-lg-6 col-md-6 col-sm-12 '>
          <div className='obj-img d-none d-sm-block' ></div>  
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className="timeline w-100 position-relative">
              <div className="timeline-item position-relative d-flex mb-5">
                  <div className="number d-flex justify-content-center align-items-center position-relative ">1</div>
                  <div className="content ms-5 p-4 rounded">
                      <h2>Short term</h2>
                      <h4> Advance professional knowledge, learn to
                          accumulate practical experience in the eld of IT. Improve myself and
                          other soft skills
                      </h4>
                  </div>
              </div>
              <div className="timeline-item position-relative d-flex mb-5">
                  <div className="number d-flex justify-content-center align-items-center position-relative">2</div>
                  <div className="content ms-5 p-4 rounded">
                      <h2>Long term</h2>
                      <h4>Become a well-equipped staff with IT knowledge,
                          making significant contributions to the company's growth and making
                          progress in the workplace.
                      </h4>
                  </div>
              </div>
              <div className="timeline-item position-relative d-flex mb-5">
                  <div className="number d-flex justify-content-center align-items-center position-relative">3</div>
                  <div className="content ms-5 p-4 rounded">
                      <h2>Future Goals</h2>
                      <h4>Become a useful person for society.</h4>
                  </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Object