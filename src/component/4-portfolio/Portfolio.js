import './Portfolio.css'
import {ProjectData} from './ProjectsData'
import { useState } from 'react'


function Portfolio() {
  const [projects, projectSet] = useState(ProjectData);
  const [opacity,setopacity] = useState(1)
  const SetOpacityInOdd = () => {

  }
    return (
      <>
        <div className="portfolio py-5">
          <div className="container">
            <div className="heading">
              <h1>Portfolio</h1>
            </div>
            <div className="row cards mt-5">
              {projects.map((project,index) => {
                return (
                  <div
                    className="card col-lg-4 col-md-6 col-sm-12 my-4"
                    key={project.id}
                  >
                    <img
                      src={project.imgScr}
                      alt="leon photo"
                      style={{ opacity: index % 2 === 0 ? 0.5 : 1 }}
                    />
                    <div className="card-caption">
                      <h5>{project.name}</h5>
                      <p>{project.ProjectDescription}</p>
                      <a href={project.link} target="blank">
                        show webpage
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}

export default Portfolio;



