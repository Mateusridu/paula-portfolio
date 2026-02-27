import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import whatsapp from '../../assets/images/whatsapp-icon.png'



const Home = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')
    const nameArray = [,'a','u','l','a','','D','a','m','a','s','c','o']
    const jobArray = ['c','l','í','n','i','c','a',' ','g','e','r','a','l','.']

   /* useEffect ( () =>{
        return setTimeout (() => {
             setLetterClass ('text-animate-hover')
        }, 4000)
    }, [])
    */
    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000))
                setLetterClass('text-animate-hover')
            }

            changeClass()
    }, [])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>O</span>
                    <span className={`${letterClass} _11`}>i,</span>
                <br />
                <span className={`${letterClass} _12`}>E</span>
                <span className={`${letterClass} _13`}>u</span>
                <span className={`${letterClass} _14`}> </span>
                <span className={`${letterClass} _15`}>s</span>
                <span className={`${letterClass} _16`}>o</span>
                <span className={`${letterClass} _17`}>u</span>
                <span className={`${letterClass} _18`}> </span>
                <span className={`${letterClass} _19`}>a</span>
                <span className={`${letterClass} _20`}> </span>
                <span className={`${letterClass} _21`}>D</span>
                <span className={`${letterClass} _22`}>r</span>
                <span className={`${letterClass} _23`}>.</span>
                <img src={LogoTitle} alt="Médica" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx= {24} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx= {26} />
                </h1>
                <h2>Médica clínica Geral Formada pela Uff</h2>
                <Link to="https://wa.me/5521997603146" className='flat-button'> <img src={whatsapp} className='whatsicon' /> Entre em contato</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home