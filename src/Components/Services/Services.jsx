import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import {motion, spring} from 'framer-motion'

const Services = () => {
  const transition = {duration: 1, type: spring}
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='button s-button'>Download CV</button>
      </div>
      <div className="cards">
        <motion.div
        initial={{left: '26rem'}}
        whileInView={{left: '24rem'}}
        transition={transition}
        className='card1'>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
        initial={{left: '-2rem', top: '10rem'}}
        whileInView={{left: '4rem'}}
        transition={transition}
        className='card2'>
          <Card
          emoji = {Glasses}
          heading = {'Developer'}
          detail = {"HTML, CSS, JavaScript, React"}
          />
        </motion.div>
        <motion.div
        initial={{left: '26rem', top: '19rem'}}
        whileInView={{left: '22rem'}}
        transition={transition}
        className='card3'>
          <Card
          emoji = {Humble}
          heading = {'UI UX'}
          detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Services