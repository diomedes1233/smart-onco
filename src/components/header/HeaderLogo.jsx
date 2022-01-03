import React from 'react';
import logoBlanco from '../../assets/logoSmart.png';



const HeaderLogo = () => {
    return (
        <div className='headercontainer'>

            <img src={logoBlanco} className='logo' alt="logo" />

        </div>

    );
}

export default HeaderLogo;