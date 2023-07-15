import Lottie from 'react-lottie-player'

import lottieJson from './lottie/work.json'

const Intro = () => {

  
  return (
    // <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
    //   <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
    //     Blog.
    //   </h1>
    //   <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
    //     A statically generated blog example using{' '}
    //     <a
    //       href="https://nextjs.org/"
    //       className="underline hover:text-blue-600 duration-200 transition-colors"
    //     >
    //       Next.js
    //     </a>{' '}
    //     and {CMS_NAME}.
    //   </h4>
    // </section>

<section id="hero-section" className="inner-top inner-bottom" aria-label="hero">
<div className="nebula-color-overlay"></div>

<div id="navigation-section" className="mp-over">

<div id="logonavcon">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-4 logocon">
<a href="https://alinabo.com/" aria-label="Alina Bo" className="no-icon">
                            <img className="svg" src="https://alinabo.com/wp-content/uploads/2022/06/cropped-logo_size.jpg" alt="Alina Bo" />
            </a>
</div>
<div className="col-lg-8">
        </div>
</div>
</div>
</div>
</div>

<div id="hero-content" className="container">
<div className="row">
<div className="col header-text">

            <h1>Alina Bo</h1>

            <h2>Coding, tech, life in Denmark</h2>





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
