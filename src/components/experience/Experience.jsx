import React from 'react'
import './experience.css'
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>Technical Knowledge</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>HTML/CSS</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Intermediate</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>ReactJs/NextJs</h4>
              <small className='text-light'>Intermediate</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>PHP</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MySql</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Software Developer</h3>
          <div className="experience__content">

          <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>C/C++</h4>
              <small className='text-light'>Intermediate</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Python</h4>
              <small className='text-light'>Advanced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>CS Fundamentals</h4>
              <small className='text-light'>Intermediate</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Git/Github</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Figma/Adobe</h4>
              <small className='text-light'>Experienced</small></div>              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Linux</h4>
              <small className='text-light'>Beginner</small></div>              
            </article>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
