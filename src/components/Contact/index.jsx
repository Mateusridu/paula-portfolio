import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useState,useEffect, useRef } from 'react'
/*import emailjs  from 'emailjs/browser' */

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

        const sendEmail = (e) => {
            e.preventDefault()

            emailjs
                .sendForm(
                    'gmail',
                    'template_ottrw6n',
                    refForm.current,
                    'service_2ertj5p'

                )
                .then(
                    () => {
                        alert ('Mensagem evniada com sucesso!')
                        window.location.reload(false)
                    },
                    () => {
                        alert('Falha ao enviar a mensagem, tente novamente')
                    }
                )
        }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <div className='info-map'>
                        Dr. Paula Damasco
                        <br />
                        Niteroi
                        <br />
                        Rua tal tal tal.
                    </div>
                    <div className='map-wrap'>
                        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[44.96366, 19.61045]}>
                            </Marker>
                        </MapContainer>
                    </div>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['E','n','t','r','e',' ','e','m',' ','c','o','n','t','a','t','o']} 
                        idx={15}
                        />
                    </h1>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Nome" required />
                                </li>
                                <li className="half">
                                    <input 
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required 
                                    />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea name="masasge" placeholder="Descrição" required 
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Enviar" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact