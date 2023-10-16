import React from "react";
import Tilt from 'react-parallax-tilt';
import Brain from './Brain.png';
import "./Logo.css"



const Logo = () => {
   
    return(
       <div className="ma4 mt0 mw4">
        <Tilt className="Tilt br2 shadow-2">
            <div className="pa3">
                <img style={{paddingtop: "5px"}} src={Brain} alt="Brain"></img>
            </div>
        </Tilt>
       </div>
    )
}
export default Logo;    