import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {motion} from 'framer-motion'

const Works = () => {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br/>
                Lorem Ipsum is simply dummy text of the.
                <br/>
                Lorem Ipsum is simply dummy text of the printing and.
            </span>
        </div>

        <div className="w-right">
            <motion.div
            initial={{rotate: 45}}
            whileInView={{rotate: 0}}
            // viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            className="w-mainCircle">
                <div className="w-sectionCircle">
                    <img src={Upwork} alt="upwork" />
                </div>
                <div className="w-sectionCircle">
                    <img src={Fiverr} alt="Fiverr" />
                </div>
                <div className="w-sectionCircle">
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className="w-sectionCircle">
                    <img src={Shopify} alt="Shopify" />
                </div>
                <div className="w-sectionCircle">
                    <img src={Facebook} alt="Facebook" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works