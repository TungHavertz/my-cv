import { useState } from 'react'
import React from 'react'
import Nav from './Nav'
import Intro from './Intro'
import Edu from './Edu'
import Skills from './Skill'
import Project from './Project'
import Object from './Object'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'
import Modal from './Modal'
import Hobbies from './Interes'
function CV() {
  const [modal, setModal] = useState('')

  return (
    <div>
        <Nav></Nav>
        <Intro></Intro>
        <Edu></Edu>
        <Skills
          setModal={setModal}
        ></Skills>
        <Project></Project>
        <Hobbies></Hobbies>
        <Object></Object>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
        <Modal
          modal={modal}
          setModal={setModal}
        ></Modal>
    </div>
  )
}

export default CV