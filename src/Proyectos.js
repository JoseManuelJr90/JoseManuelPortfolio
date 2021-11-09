import React from 'react';
import "./Proyectos.css";
import proyecto1 from "./img/evaluacion.jpg";

function Proyectos() {
    return (
        <div className="proyectos component__space" id="Proyectos">
             <div className="titulo">
                <h1 className="titulo">Proyectos</h1>
                <p className="titulo p__color">Php, Js, Bootstrap 5, mysql</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
                        <div className="proyecto__box pointer relative">
                            <div className="proyecto__box__img pointer relative">
                                <div className="proyecto__img__box">
                                    <img src={proyecto1} alt="" className="proyecto__img" />
                                </div>
                                <div className="mask__effect"></div>
                                <div className="proyecto__desc absolute">
                                    <h5 className="proyecto__text">Evaluación en linea </h5>
                                    <h4 className="proyecto__text">Sistema de gestión de profesores y alumnos.</h4>
                                    <h4 className="proyecto__text">Creación y realización de examenes.</h4>
                                    <div className="btns__proyecto">
                                        <a href="https://evaluacionenlinea.online/" target="_blank" rel="noreferrer" className="proyecto__btn">Ver</a>
                                        <a href="https://github.com/JoseManuelJr90/evaluacionenlinea" rel="noreferrer" target="_blank" className="proyecto__btn">Repositorio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
