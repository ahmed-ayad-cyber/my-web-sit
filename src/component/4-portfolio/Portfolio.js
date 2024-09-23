import './Portfolio.css'
import leon from './../../imgs/leon.png'
import kasper from './../../imgs/kasper.jpg'
import bondi from './../../imgs/bondi.jpg'

function Portfolio() {
    return (
      <>
        <div className="portfolio my-5">
          <div className="container">
            <div className="heading">
              <h1>Portfolio</h1>
            </div>
            <div className="row cards mt-5">
              <div className="card col-lg-4 col-md-6 col-sm-12 my-4">
                <img src={leon} alt="leon photo" />
                <div className="card-caption">
                  <h5>leon</h5>
                  <p>this is my first page i write it with HTML & css only</p>
                  <a href="#" className="">
                    show webpage
                  </a>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12 my-4">
                <img src={kasper} alt="leon photo" />
                <div className="card-caption">
                  <h5>kasper</h5>
                  <p>this is my secound page i write it with HTML & css only</p>
                  <a href="#">show webpage</a>
                </div>
              </div>
              <div className="card col-lg-4 col-md-6 col-sm-12 my-4">
                <img src={bondi} alt="leon photo" />
                <div className="card-caption">
                  <h5>bondi</h5>
                  <p>this is my first page i write it with HTML & css and bootstarp</p>
                  <a href="#">show webpage</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Portfolio;