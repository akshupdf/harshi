import React from 'react'
import Navbar from './navbar'
import Home from './home'
import Project from './projects'
// import Slider from './slider'
import Contact from './contact'
import ImageSlider from './imgslider'

function app () {
  return(
    <div>
    <Navbar />
    <Home />
    <ImageSlider />
    <Project />
    <Contact />
    </div>

  )

}
export default app;
