import React from 'react'
import Navbar from './navbar'
import Home from './home'
import Project from './projects'
import Slider from './slider'
import Contact from './contact'
import ImageSlider from './imgslider'

function app () {
  return(
    <div>
    <Navbar />
    <Home />
    <Project />
    <ImageSlider />
    <Contact />
    </div>

  )

}
export default app;
