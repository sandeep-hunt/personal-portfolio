import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Loream ipsum dolar, sit amet here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
        },
        {
            img: profilePic2,
            review: "Loream ipsum dolar, sit amet here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
        },
        {
            img: profilePic3,
            review: "Loream ipsum dolar, sit amet here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
        },
        {
            img: profilePic4,
            review: "Loream ipsum dolar, sit amet here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
        },
    ]
  return (
    
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=> {
                return (
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials