import React from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import 'swiper/css'

const Projects = () => {
  return (
    <div className="projects">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='projects-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="sidebar" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="Ecommerce" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="HOC" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="MusicApp" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Projects