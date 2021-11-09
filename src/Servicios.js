import React,{useEffect} from 'react';
import "./Servicios.css";
import Aos from "aos";
import "aos/dist/aos.css";



import mysql from "./img/mysql.svg";
import html from "./img/html.svg";
import php from "./img/php.svg";
import js from "./img/js.svg";
import reacti from "./img/react.svg";
import css from "./img/css.svg";
import boots from "./img/boots.svg";

// Icons FontAwesom
function Servicios() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="servicios component__space " id="Servicios">
            <div className="titulo">
                <h1 className="titulo">Habilidades</h1>
            </div>
            <div className="container"  >
                <div>
                    <div className="row">
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70"  >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={php} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={mysql} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={js} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={html} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={css} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={reacti} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col__n" data-aos="flip-left" data-aos-delay="800" data-aos-offset="-70" >
                            <div className="habilidad__box">
                                <div className="brand">
                                    <img src={boots} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="titulo" style={{marginTop:"100px"}}>
                    <h1 className="titulo">Servicios</h1>
                </div>


                <div className="row">
                    <div className="col__3">
                        <div className="servicio__box">
                            <div className="icon">
                                <i className="fa fa-code" aria-hidden="true"></i>
                            </div>
                            <div className="servicio__desc">
                                <h1 className="servicio__text">
                                    Desarrollo web
                                </h1>
                                <p className="p servicio__text p__color">
                                Desarrollo de aplicaciones web dinámicas, mediante Apis REST y CRUD ideales para almacenar y editar datos. 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="servicio__box ">
                            <div className="icon">
                                <i className="fas fa-mobile-alt" aria-hidden="true"></i>
                            </div>
                            <div className="servicio__desc">
                                <h1 className="servicio__text">
                                    Diseño Web responsivo.
                                </h1>
                                <p className="p servicio__text p__color">
                                     Creación de sitios web que se ven bien desde cualquier dispositivo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col__3">
                        <div className="servicio__box ">
                            <div className="icon">
                                <i className="fas fa-database" aria-hidden="true"></i>
                            </div>
                            <div className="servicio__desc">
                                <h1 className="servicio__text">
                                    Bases de datos
                                </h1>
                                <p className="p servicio__text p__color">
                                    Elaboración, manejo de bases de datos y relaciones de tablas de acuerdo a los requerimientos del sistema.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios
