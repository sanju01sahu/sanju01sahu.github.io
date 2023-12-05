import React from 'react'

const ProjectsSection = () => {
  return (
    <div id="projects" >
      <div className="project-card" >
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h3 className='project-title' ></h3>
          <p className='project-description' ></p>
          <div className='project-tech-stack' >
            <img src="" alt="" />
          </div>
          <div>
          <a href=""><img src="" alt="" /></a>
            <a href=""><img src="" alt="" /></a>
          </div>
          <div>
            <a href="" className='project-github-link' ><button>GitHub Link</button></a>
            <a href="" className='project-deployed-link' ><button>Deploved Link</button></a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectsSection