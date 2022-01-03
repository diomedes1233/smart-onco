import React from 'react'
import BtnLogin from './header/BtnLogin'
import MenuLogin from './header/MenuLogin'


const MenuButton= () => {
    return (
        <div className='menubuttonfondo'>
            <MenuLogin/>
            <BtnLogin/>
        </div>
    )
}

export default MenuButton
