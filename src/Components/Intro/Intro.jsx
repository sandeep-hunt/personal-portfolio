import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linked from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration: 2, type: 'spring'}

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
            <img src={Vector1} alt="vector1" />
            <img src={Vector2} alt="vector2" />
            <img src={boy} alt="boy" />

            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={glassesimoji} alt="glassesemoji" />

            <motion.div
            initial={{top: '-4%', left: '74%'}}
            whileInView={{left: '68%'}}
            transition={transition}
            className='floatingdiv1'>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>

            <motion.div
            initial={{left: '9rem', top: '18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}className='floatingdiv2'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
            </motion.div>

        </div>
    </div>
  )
}

export default Intro