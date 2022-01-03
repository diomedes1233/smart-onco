import React from 'react'
import HeaderLogo from '../components/header/HeaderLogo'

import TextInitial from '../components/main/TextInitial'
import MenuButton from '../components/MenuButton'


const MainPage = () => {
    return (
        <>
            <MenuButton/>
            <HeaderLogo/>
            <TextInitial />
        </>
    )
}

export default MainPage
