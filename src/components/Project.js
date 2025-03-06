// src/components/Projects.js
import React from 'react';
import '../styles/project.css';
import ProjectsItem from '../itemComponents/ProjectItem.js'; // Đường dẫn tùy thuộc thư mục bạn chọn
import projectsData from '../data/projectData.js';

function Projects() {
  return (
    <div className="d-flex justify-content-center project-bg">
      <div className="d-flex flex-column align-items-start justify-content-evenly z-2 project-wrap">
        <h1 className="project-title">Personal Project</h1>
        <div className="row gy-5">
          {projectsData.map((project, index) => (
            <ProjectsItem
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;