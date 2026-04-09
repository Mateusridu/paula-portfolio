import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'



const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();


    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
        </div> 
    )
}

export default Logo;