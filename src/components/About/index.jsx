import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Face from '../../assets/images/face-p.png'

const About = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')

    useEffect(() => {
        const changeClass = async () => {
            await new Promise(resolve => setTimeout(resolve, 1000))
                setLetterClass('text-animate-hover')
            }

            changeClass()
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S','o','b','r','e',' ','m','i','m']}
                        idx={15}
                        />
                </h1>
                <p>Clínica geral formada pela Universidade Federal Fluminense onde eu escolhi me especializar em Clínica médica. Atuo na prevenção de doenças, acompanhamento de condições crônicas
                    e diagnósticos complexos.
                    Saúde integrada, medicina preventiva e diagnóstico de ponta. 
                </p>
            </div>
            <div className="container face-container">
                <img src={Face} alt="medica" />
            </div>
        </div>
        </>
    )
}

export default About