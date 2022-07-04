import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Shubham Balayan",
    comp: 'CEO @Bending Tech',
    review:
      "Utkarsh has good work ethics and exemplary skills. He was a constant top performer in our developer's team. He has always exceeded scorecard metrics and achieved high goals. He is a team player who's helping out his team. I'd highly recommend him.",
  },
  {
    avatar: AVTR2,
    name: "Satyam Singh",
    comp: 'SDE Intern',
    review:
      "Utkarsh is is amongst the best Technical person I came across in recent past. I highly recommend him who have worked with me, if he getting a chance to serve under you, I assure you that he would leave no any stone unturned for giving you a complete satisfaction.",
  },
  {
    avatar: AVTR4,
    name: "Ananya Dodmani",
    comp: 'CEO @TribalConnect',
    review:
      "Utkarsh was a part of my team for a project. He is hard working and has a good command over his technical skills. He has always surprised me with his dedication towards his work therefore I feel like he can be a great asset for any to your organization.",
  },
  {
    avatar: AVTR3,
    name: "Anurag Panda",
    comp: 'Dev @SRM',
    review:
      "I've worked with Utkarsh on a React project, I think he's quite driven and focussed on his work. He is a good learner and a team player who helped me with several stuff during our work period. I think he will be a great asset for any organization.",
  }
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>What Do People Say</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,comp, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src= {avatar} alt="Img1" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <p style={{fontSize: '0.8rem',color:'var(--color-light)',marginBottom:'0.8rem'}}>{comp}</p>
            <small className="client__review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
