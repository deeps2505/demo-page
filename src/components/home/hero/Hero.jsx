import React from "react"
import "./hero.css"
import Title from "../../common/title/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
              <Title subtitle='Welcome to Stewart' title='Best Online Courses'/>
                <p>Find the right instructor for you. Start learning today. Shop thousands of high-quality on-demand online courses</p>
                <div className="button">
                  <button className="primary-btn">
                    Get started Now<i className="fa fa-long-arrow-alt-right" ></i>
                  </button>
                  <button className="primary-btn">
                    View couses<i className="fa fa-long-arrow-alt-right" ></i>
                  </button>
                </div>
            </div>
        </div>
      </section>
      <div className="margin">
      </div>
    </>
  )
}

export default Hero
