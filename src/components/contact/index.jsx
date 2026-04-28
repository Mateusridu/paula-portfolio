import './index.scss'
import AnimatedLetters from '../animatedletters'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useState,useEffect, useRef } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState ('text-animate')
    const refForm = useRef ()
    
        useEffect(() => {
            const changeClass = async () => {
                await new Promise(resolve => setTimeout(resolve, 1000))
                    setLetterClass('text-animate-hover')
                }
    
                changeClass()
        }, [])


    return (
            <div className="container contact-page">
                <h1 className="contact-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['L','o','c','a','l','i','z','a','ç','ã','o']}
                        idx={15}
                    />
                </h1>

                <div className="address-info">
                    <p className="address-text">
                        📍 Rua Ator Paulo Gustavo, 160 — Icarai, Niterói - RJ, 21655-180, Brasil
                    </p>
                </div>

                <div className="map-wrap">
                    <MapContainer
                        center={[-22.906004, -43.112086]}
                        zoom={13}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-22.906004, -43.112086]} />
                    </MapContainer>
                </div>
            </div>
    )

}

export default Contact