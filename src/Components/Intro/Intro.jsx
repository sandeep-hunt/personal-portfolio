import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linked from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer is web designing level of experience in web designing and developemnt, producting the Quality work</span>
            </div>
            <button className="i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="Github" />
                <img src={Linked} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            I am right
        </div>
    </div>
  )
}

export default Intro