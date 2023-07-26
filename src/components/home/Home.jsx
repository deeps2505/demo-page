import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Testimonial from "./testimonial/Testimonial"
import Hblog from "./Hblog"

const Home = () => {
  return (
    <>
      <Hero/>
      <AboutCard/>
      <HAbout/>
      <Testimonial/>
      <Hblog/>
    </>
  )
}

export default Home
