import React from 'react';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';


const Footer = () =>{
    return( 
        
        <div className='footer'>
            <div className="icon">
            <IconContext.Provider value={{ color: 'white', size: "2em", style: {backgroundColor: "#56cca", padding: "10px"}}}>
                < SiFacebook /> 
                < SiInstagram />
                < SiWhatsapp />
            </IconContext.Provider> 
            </div> 
            <p className='pfooter'>Todos los derechos reservados ©</p> 
        </div>
    );
}

export default Footer;

