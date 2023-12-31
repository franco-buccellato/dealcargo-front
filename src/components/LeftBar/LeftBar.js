import './LeftBar.css'
/* import iconoLinkedin from '../../imagenes/icono-linkedin-small-min.webp';
import iconoInstagram from '../../imagenes/icono-instagram-small-min.webp';
import iconoFacebook from '../../imagenes/icono-facebook-small-min.webp';
import iconoWsp from '../../imagenes/icono-wsp-small-min.webp'; */
import iconoLinkedin from '../../imagenes/linkeding.png';
import iconoInstagram from '../../imagenes/instagram.png';
import iconoFacebook from '../../imagenes/facebook.png';
import iconoWsp from '../../imagenes/whatsapp.png';


function LeftBar() {

    return (
        <div className="leftbar">
            <div className="container-navigation-left">
                <ul className='leftbar-style'>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.linkedin.com/company/deal-cargo/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Linkedin' src={iconoLinkedin}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.instagram.com/dealcargo/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Instagram' src={iconoInstagram}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.instagram.com/dealcargo/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Facebook' src={iconoFacebook}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://wa.me/+5491134857071" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono WhatsApp' src={iconoWsp}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;