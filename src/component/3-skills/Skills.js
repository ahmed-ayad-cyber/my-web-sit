import './Skills.css'

function Skills() {
    return (
      <>
        <div className="skills mt-5">
          <div className="container">
            <div className="text-skills text-center">
              <h1>Skills</h1>
              <p>
                As a Full Stack Developer, I possess a comprehensive set of
                technical skills that span both front-end and back-end
                development. My expertise includes crafting dynamic and
                responsive web applications, leveraging modern frameworks and
                tools to deliver exceptional user experiences. Here’s a snapshot
                of the key skills and technologies that I bring to the table:
              </p>
            </div>
            <div className="progress-container d-flex justify-content-between align-items-center">
              <div className="progress-explain p-5  ">
                <h4 className="text-center border-bottom pb-3">My Skills</h4>
                <ul className="fs-5">
                  <li>Frontend Development</li>
                  <li>Backend Development</li>
                  <li>Databases</li>
                  <li>Version Control</li>
                </ul>
              </div>
              <div className="progress-bars d-flex flex-column align-items-start">
                <div className="progress-bar">
                  <span className="html">HTML & CSS & bootstrap 90%</span>
                </div>
                <div className="progress-bar">
                  <span className="js">JS 80%</span>
                </div>
                <div className="progress-bar">
                  <span className="react">react 70%</span>
                </div>
                <div className="progress-bar">
                  <span className="phython">Phython 50%</span>
                </div>
                <div className="progress-bar">
                  <span className="git">Version Control Git & GitHub 95%</span>
                </div>
                <div className="progress-bar">
                  <span className="sql">SQL 60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Skills;