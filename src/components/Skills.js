import React from 'react'
import './styles/skills.css'
function Skills(props) {
    const {setModal} = props
    const handleSkillClick = (skill) => {
        setModal(skill)
    }

    return (
        <div className='d-flex justify-content-center skill-wrap'>
            <div className='d-flex flex-column align-items-start flex-column'>
                <h1>Skills</h1>
                <div className='row gy-4'>
                    <div className='col-lg-4 col-md-6 col-sm-12' onClick={() => handleSkillClick('html')}>
                        <div className='skill-item'>
                            <p className='skill-title'>HTML/CSS</p>
                            <i class="fa-brands fa-html5  skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12' onClick={() => handleSkillClick('respon')}>
                        <div className='skill-item'>
                            <p className='skill-title'>Responsive</p>
                            <i class="fa-solid fa-desktop skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12' onClick={() => handleSkillClick('js')}>
                        <div className='skill-item'>
                            <p className='skill-title'>JS</p>
                            <i class="fa-brands fa-square-js skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='skill-item'>
                            <p className='skill-title'>Bootstrap</p>
                            <i class="fa-brands fa-bootstrap skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='skill-item'>
                            <p className='skill-title'>React</p>
                            <i class="fa-brands fa-react  skill-icon"></i>

                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='skill-item'>
                            <p className='skill-title'>Node JS</p>
                            <i class="fa-brands fa-node-js  skill-icon"></i>
                        </div>

                    </div>
                    <div  className='col-lg-4 col-md-6 col-sm-12 '>
                        <div className='skill-item'>
                            <p className='skill-title'>Git</p>
                            <i class="fa-brands fa-git-alt skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='skill-item'>
                            <p className='skill-title'>C/C++/C#</p>
                            <i class="fa-brands fa-c  skill-icon"></i>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='skill-item'>
                            <p className='skill-title'>Python</p>
                            <i class="fa-brands fa-python  skill-icon"></i>
                        </div>

                    </div>
                    
                    


                </div>
                
            </div>

        </div>
    )
}

export default Skills