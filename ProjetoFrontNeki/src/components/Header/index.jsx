import React, { useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import Logo from '../../assets/NekiLogo.png';

function Header() {

    useEffect
    return (
        <>
            <div className='corpo'>
                <img width={'70px'} height={'70px'} src={Logo}/>
            </div>
        </>
    )
}

export default Header
    
    