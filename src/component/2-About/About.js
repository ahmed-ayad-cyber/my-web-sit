import './About.css'

function About() {
    return (
      <>
        <div className="about py-5">
          <div className="container">
            <div className="text-about d-flex justify-content-between mt-5">
              <h1 className="mx-5">About Me</h1>
              <p>
                I’m Ahmed Ayad, a Full Stack Developer passionate about crafting
                dynamic web applications. I excel in HTML, CSS, JavaScript,
                React, and Python, with Git and GitHub for version control.
                Bootstrap helps me build responsive designs seamlessly. My
                recent projects, including Bondi, Kasper, and Leon, highlight my
                ability to deliver impactful solutions. I thrive on solving
                complex problems and creating smooth user experiences. Outside
                of coding, I enjoy going to the gym and playing Sokoban, which
                keeps me both fit and mentally sharp. Let’s connect to explore
                new opportunities or chat about the latest in tech!
              </p>
            </div>
            <div className="download mb-3">
              <a
                href="/my cv.txt"
                download="cv.text"
                className="btn rounded-pill"
              >
                Download My resume
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;