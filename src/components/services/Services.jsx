import React from 'react'
import './services.css'
import {FaLaptopCode} from 'react-icons/fa'
import {CgServer} from 'react-icons/cg'
import {ImMobile} from 'react-icons/im'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FaLaptopCode className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <FaLaptopCode className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <FaLaptopCode className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <FaLaptopCode className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <CgServer className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <CgServer className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <CgServer className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
            <li>
              <CgServer className='service__list-icon' />
              <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
            </li>
          </ul>
        </article>


        <article className="service">
                  <div className="service__head">
                    <h3>Mobile</h3>
                  </div>

                  <ul className='service__list'>
                    <li>
                      <ImMobile className='service__list-icon' />
                      <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
                    </li>
                    <li>
                      <ImMobile className='service__list-icon' />
                      <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
                    </li>
                    <li>
                      <ImMobile className='service__list-icon' />
                      <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
                    </li>
                    <li>
                      <ImMobile className='service__list-icon' />
                      <p>lorem, ipsum dolor sit amet cossetuin elit dolor.</p>
                    </li>
                  </ul>
                </article>
      </div>
    </section>
  )
}

export default Services