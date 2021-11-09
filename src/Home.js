import React,{useState, useEffect} from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";


import './Home.css';
import logo from "./img/lobo.png";

function Home(){

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])


    /**Fixed nav */
    window.addEventListener("scroll",function(){
        const nav = document.querySelector(".header");
        const navResponsive = document.querySelector(".header__responsive");
        nav.classList.toggle("active", window.scrollY > 50);
        navResponsive.classList.toggle("active", window.scrollY > 50);
    });
    
    /**Toggle menu */
    const [show, setShow] = useState(false);

    return(
        <div className="home" id="Home">
            <div className="home__bg">
                <div className="header d__flex align__items__center justify__content__space__between">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation pxy__30">
                        <ul className="navbar d__flex">
                            <Link to = "Home" smooth={true}><li className="nav__items home__item mx__15">Home</li></Link>
                            <Link to = "Acerca_de" smooth={true} offset={-65}><li className="nav__items acerca__item mx__15">Acerca de</li></Link>
                            <Link to = "Servicios" smooth={true} offset={-65}><li className="nav__items servicios__item mx__15">Habilidades</li></Link>
                            <Link to = "Proyectos" smooth={true} offset={-35}><li className="nav__items proyectos__item mx__15">Proyectos</li></Link>
                            <Link to = "Contacto" smooth={true} offset={-20}><li className="nav__items contacto__item mx__15">Contacto</li></Link>
                        </ul>
                    </div>
                </div>
                {/**Nav responsive */}
                <div className="header__responsive d__flex align__items__center pxw__30">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                      {/**Toggle menu */}
                    <div className="toggle__menu pxy__30">
                        <i onClick={()=>setShow(!show)} className="fas fa-bars" style={{"color":"white"}}></i>
                    </div>
                    {show ? (
                        <div className="sideNavbar">
                            <ul className="sidebar d__flex">
                                <li className="sideNavbar" ><Link onClick={()=>setShow(!show)} to="Home" smooth={true}>Home</Link></li>
                                <li className="sideNavbar" ><Link  onClick={()=>setShow(!show)} to="Acerca_de" smooth={true}>Acerca de</Link></li>
                                <li className="sideNavbar" ><Link onClick={()=>setShow(!show)} to="Servicios" smooth={true}>Habilidades</Link></li>
                                <li className="sideNavbar" ><Link onClick={()=>setShow(!show)} to="Proyectos" smooth={true}>Proyectos</Link></li>
                                <li className="sideNavbar" ><Link onClick={()=>setShow(!show)} to="Contacto" smooth={true}>Contacto</Link></li>
                            </ul>
                        </div>
                    ) : null
                    }
                </div>
              
                {/** Contenido home */}
                <div className="container" data-aos="zoom-in">
                    <div className="home__content">
                        <div className="home__bienvenida">
                            <h1 className="home__text pz__10">
                                ¡HOLA, BIENVENIDO!
                            </h1>
                            <h2 className="home__text pz__10">
                                SOY JOSE MANUEL JARAMILLO.
                            </h2>
                            <h3 className="home__text pz__10">
                                DESARROLLADOR WEB Jr. FULL STACK.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;