import Lottie from 'react-lottie-player'

import lottieJson from './lottie/work.json'

const Intro = () => {


  return (
    <section id="hero-section" className="inner-top inner-bottom" aria-label="hero">
      <div className="nebula-color-overlay"></div>

      <div id="navigation-section" className="mp-over">

        <div id="logonavcon">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 logocon">
                <a href="/" aria-label="Alina Bo" className="no-icon">
                  <img className="svg" src="/assets/blog/logo/cropped-logo_size.jpg" alt="Alina Bo" />
                </a>
              </div>
              <div className="col-lg-8">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="hero-content" className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col flex items-center justify-center">
            <div className="header-text">
              <h1>Alina Bo</h1>
              <h2>Coding, tech, life in Denmark</h2>
            </div>
          </div>
          <div className="col lottie-player">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>


      </div>
    </section>
  )
}

export default Intro
