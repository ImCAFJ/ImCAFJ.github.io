import React from 'react'
import './experience.css'
import {AiFillStar} from 'react-icons/ai'
import {FaHtml5} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className="experience__details">
            <DiJavascript className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/></small>
            </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/></small>
              </div>
            </article>

            <article className="experience__details">
            <DiJavascript className='experience__details-icon'/>
            <div>
              <h4>Javascript</h4>
              <small className="text-light"><AiFillStar/><AiFillStar/><AiFillStar/></small>
            </div>
            </article>


          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience