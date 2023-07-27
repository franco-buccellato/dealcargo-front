import './NavBarDesk.css';
import {Link} from 'react-router-dom';
/* import logoIsologo from '../../imagenes/meca-logo-isologo-small-min.webp'; */
import isologo from '../../imagenes/isologotipo1.png';
import isotipo from '../../imagenes/isotipo.png';

function NavBarDesk({estaEnSupPage}) {

    const HideNavBar = () => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (150 > currentScrollPos) {
                document.getElementById('navBar').style.background = '';
                document.getElementById('navBar').style.height = '105px';
                document.getElementById('navBar').style.paddingBottom = '0';
                document.getElementById('navBar').style.borderRadius = '0'
                document.getElementById('logo-navBar').src = isologo;
                document.getElementById('logo-navBar').style.marginBottom = '0';
                document.getElementById('logo-navBar').style.width = '70%';
                document.getElementById('title-productos').style.marginBottom = '0px';
                document.getElementById('title-clientes').style.marginBottom = '0px';
                document.getElementById('title-nosotros').style.marginBottom = '0px';
                document.getElementById('title-novedades').style.marginBottom = '0px';
                document.getElementById('title-trabaja-con-nosotros').style.marginBottom = '0px';
                /* document.getElementById('navbar-style').style.paddingBottom = "1%"; */
            } else {
                document.getElementById('navBar').style.background = '#ffffffea';
                document.getElementById('navBar').style.height = '80px';
                document.getElementById('navBar').style.paddingBottom = '20px';
                document.getElementById('navBar').style.borderBottomLeftRadius = '30px';
                document.getElementById('navBar').style.borderBottomRightRadius = '30px';
                document.getElementById('logo-navBar').src = isotipo;
                document.getElementById('logo-navBar').style.width = '50%';
                document.getElementById('title-productos').style.marginBottom = '-10px';
                document.getElementById('title-clientes').style.marginBottom = '-10px';
                document.getElementById('title-nosotros').style.marginBottom = '-10px';
                document.getElementById('title-novedades').style.marginBottom = '-10px';
                document.getElementById('title-trabaja-con-nosotros').style.marginBottom = '-10px';
                /* document.getElementById('logo-navBar').style.marginBottom = ''; */
                /* document.getElementById('logo-navBar').style.height = '35px'; */
            }
        }
    }
    HideNavBar();

    if(estaEnSupPage !== '/') {
        return(
            <div className="navbar" id='top-landig-page'>
                <div className="background"></div>
                <div className="container-navigation">
                <nav className="navigation" id='navBar'>
                        <div className='container-logo-marca' id='logo-nav-bar'>
                            <Link to = {'/'}>
                                <img id='logo-navBar' className='logo-pagina' alt='Logo' src={isologo}></img>
                            </Link>
                        </div>
                        <ul className='navbar-style'>
                            <li className="list" id='title-productos' >
                                <Link to = {'/'}>
                                    <h2 className='list-text'>Servicios</h2>
                                </Link>
                            </li>
                            <li className="list" id='title-nosotros' >
                                <Link to = {'/'}>
                                    <h2 className='list-text'>Nosotros</h2>
                                </Link>
                            </li>
                            <li className="list" id='title-clientes' >
                                <Link to = {'/'}>
                                    <h2 className='list-text'>Clientes</h2>
                                </Link>
                            </li>
                            <li className="list" id='title-novedades' >
                                <Link to = {'/'}>
                                    <h2 className='list-text'>Novedades</h2>
                                </Link>
                            </li>
                            <li className="list-trabaja-con-nosotros" id='title-trabaja-con-nosotros' >
                                <Link to = {'/'}>
                                    <h2 className='list-text' id='button-trabaja'>Contáctanos</h2>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
    return (
        <div className="navbar" id='top-landig-page'>
            <div className="background"></div>
            <div className="container-navigation">
            <nav className="navigation" id='navBar'>
                    <div className='container-logo-marca' id='logo-nav-bar'>
                        <a href='#top-landig-page'>
                            <img id='logo-navBar' className='logo-pagina' alt='Logo' src={isologo}></img>
                        </a>
                    </div>
                    <ul className='navbar-style'>
                        <li className="list" id='title-productos' >
                            <a href='#section-servicios'>
                                <h2 className='list-text'>Servicios</h2>
                            </a>
                        </li>
                        <li className="list" id='title-nosotros' >
                            <a href='#section-nosotros'>
                                <h2 className='list-text'>Nosotros</h2>
                            </a>
                        </li>
                        <li className="list" id='title-clientes' >
                            <a href='#section-clientes'>
                                <h2 className='list-text'>Clientes</h2>
                            </a>
                        </li>
                        <li className="list" id='title-novedades' >
                            <a href='#section-novedades'>
                                <h2 className='list-text'>Novedades</h2>
                            </a>
                        </li>
                        <li className="list-trabaja-con-nosotros" id='title-trabaja-con-nosotros' >
                            <a href='#section-conocenos'>
                                <h2 className='list-text' id='button-trabaja'>Contáctanos</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBarDesk;