import './Skills.css'
import {SkillsData} from './SkillsData'

function Skills() {

    return (
      <>
        <div className="skills pt-5">
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
                {SkillsData.map((skill, index) => {
                  return (
                    <div className="bar" key={skill.id}>
                      <span className="skill">{skill.SkillName}</span>
                      <div className="prog">
                        <div
                          className="inner-prog"
                          style={{ width: skill.progress }}
                        >
                          {skill.progress}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Skills;