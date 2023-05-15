import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='button s-button'>Download CV</button>
      </div>
      <div className="cards">
        <div className='card1'>
          <Card
          emoji = {HeartEmoji}
          heading = {'Design'}
          detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div className='card2'>
          <Card
          emoji = {Glasses}
          heading = {'Developer'}
          detail = {"HTML, CSS, JavaScript, React"}
          />
        </div>
        <div className='card3'>
          <Card
          emoji = {Humble}
          heading = {'UI UX'}
          detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
      </div>
    </div>
  )
}

export default Services