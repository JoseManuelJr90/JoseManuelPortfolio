import React,{useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contacto.css";

function Contacto() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className="contacto component__space" id="Contacto" data-aos="fade-up" data-aos-delay="400">
            <div className="titulo">
                <h1 className="titulo">Contacto</h1>
                <p className="titulo p__color">Si estás interesado en iniciar un proyecto comunicate conmigo.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <div className="contacto__box">
                            <div className="icon" style={{display:"flex", justifyContent:"center"}}>
                                <a href="mailto:jose.mjr0128@gmail.com" title="Enviar E-mail">
                                    <i className="fas fa-envelope-square mail" aria-hidden="true"></i>     
                                </a>      
                            </div>
                        </div>
                    </div>
                    <div className="col__2">
                        <div className="contacto__box">
                            <div className="icon">
                                <a href="http://api.whatsapp.com/send?phone=+525611819649" target="_blank" rel="noreferrer" title="Enviar WhatsApp">
                                    <i className="fab fa-whatsapp-square whats" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto
