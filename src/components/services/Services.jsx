import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Experience</h5>
      <h2>My Recent Work</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Salaah Mentor Community</h3>
          </div>
          <ul className='service__list'>
            <li style={{display:'table',margin:'0px auto 1.1rem auto'}}>
              {/* <BiCheck className='service__list-icon'/> */}
              <p style={{fontWeight:800,fontSize:'1rem'}}>Frontend Lead</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>It's a patented project being made for the college alumni network.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I’m working on ReactJS dealing with Props, Hooks, Routing, States.</p>
            </li>            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Some technologies being used are Redux, Socket.io, Formik, Chakra UI.</p>
            </li>            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Bending Tech</h3>
          </div>
          <ul className='service__list'>
          <li style={{display:'table',margin:'0px auto 1.1rem auto'}}>
              {/* <BiCheck className='service__list-icon'/> */}
              <p style={{fontWeight:800,fontSize:'1rem'}}>Web Development Intern</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I replicated the given Figma UI using Javascript, CSS and Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I wrote SQL queries and PHP code for adding the CRUD functionality.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I used to explain the working of the backend services to the clients.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I learnt about APIs, working with clients, team, & Pressure Management</p>
            </li>                     
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>GFG ABESEC</h3>
          </div>
          <ul className='service__list'>
          <li style={{display:'table',margin:'0px auto 1.1rem auto'}}>
              {/* <BiCheck className='service__list-icon'/> */}
              <p style={{fontWeight:800,fontSize:'1rem'}}>Content Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I've worked as a Video Editing coordinator and a Technical writer.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I've made 10+ videos and I was an editing lead for 6 months.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One of my Technical article on debugging secured 37th rank in India.</p>
            </li>                    
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services