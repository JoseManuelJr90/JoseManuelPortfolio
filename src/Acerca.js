import React , {useEffect} from 'react';
import { Link } from 'react-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

import "./Acerca.css";
import acercaImg from "./img/foto.jpeg";
import CV from "./img/JoseManuelCV.pdf";


export default function Acerca() {

    useEffect(() => {
        Aos.init({duration: 5000})
    }, [])

    /**Scroll top btn */
    window.addEventListener("scroll",function(){
        const up = document.querySelector("a.btn__to__top");
        up.classList.toggle("active", window.scrollY > 0);
    });
    return (
        <div className="acerca component__space" id="Acerca_de">
            <div className="container">
                <div className="row">
                    <div className="col__2" data-aos="zoom-in" data-aos-delay="300">
                        <img src={acercaImg} alt="" className="acerca__img" />
                    </div>
                    <div className="col__2" data-aos="fade-left" data-aos-delay="300">
                        <h1 className="acerca__head">
                            Acerca de mi.
                        </h1>
                        <div className="acerca__cuerpo">
                            <div className="acerca__text">
                                <p>
                                Soy un desarrollador full stack junior, graduado de la facultad de ingeniería de la UNAM con el título de ingeniero en computación.
                                </p>
                                <p>
                                    Tome el gusto por el desarrollo web durante mi servicio como becario en el área de informática de la Facultad de Química, desarrollando sistemas web basados principalmente en PHP para diferentes áreas combinandolo con mis conocimientos en bases de datos.
                                </p>
                                <p>
                                    Desde entonces me he dedicado a mejorar mis habilidades así como aprender algunas de las nuevas tecnologías que han surgido en estos años.
                                </p>
                            </div>
                            <div className="acerca__button d__flex align__items__center">
                                <a href={CV} download="JoseManuelCV.pdf" ><button className="acerca btn pointer">Descarga CV</button></a>
                                <Link to="Contacto" smooth="true"><button className="acerca btn pointer">Contacto</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Btn  Scroll arriba */}
            <div className="btn__scroll__top">
                <Link to="Home" smooth={true} className="btn__to__top">
                    <i className="fas fa-chevron-up" style={{"color": "white"}}></i>
                </Link>
            </div>
        </div>
    )
}
