import './CarrouselClientes.css';
import cliente1 from '../../imagenes/Logo-Bimbo.png'
import cliente2 from '../../imagenes/Logo-Aires.svg'
import cliente3 from '../../imagenes/Logo-Asecon.png'
import cliente4 from '../../imagenes/Logo-Fasten.jpg'
import cliente5 from '../../imagenes/Logo-GrupoHydralpng.png'
import cliente6 from '../../imagenes/Logo-Machvision.png'
import cliente7 from '../../imagenes/Logo-Powercom.png'
import cliente8 from '../../imagenes/Logo-Bimbo.png'
import cliente9 from '../../imagenes/Logo-Aires.svg'
import cliente10 from '../../imagenes/Logo-Asecon.png'
import cliente11 from '../../imagenes/Logo-Fasten.jpg'
import cliente12 from '../../imagenes/Logo-GrupoHydralpng.png'
import cliente13 from '../../imagenes/Logo-Machvision.png'
import cliente14 from '../../imagenes/Logo-Powercom.png'


function CarrouselClientes() {
    return (
        <div  className="slider">
            <div  className="slide-track">
                <div  className="slide">
                    <img src={cliente1} alt="cliente1"/>
                </div>
                <div  className="slide">
                    <img src={cliente2} alt="cliente2"/>
                </div>
                <div  className="slide">
                    <img src={cliente3} alt="cliente3"/>
                </div>
                <div  className="slide">
                    <img src={cliente4} alt="cliente4"/>
                </div>
                <div  className="slide">
                    <img src={cliente5} alt="cliente5"/>
                </div>
                <div  className="slide">
                    <img src={cliente6} alt="cliente6"/>
                </div>
                <div  className="slide">
                    <img src={cliente7} alt="cliente7"/>
                </div>
                <div  className="slide">
                    <img src={cliente8} alt="cliente8"/>
                </div>
                <div  className="slide">
                    <img src={cliente9} alt="cliente9"/>
                </div>
                <div  className="slide">
                    <img src={cliente10} alt="cliente10"/>
                </div>
                <div  className="slide">
                    <img src={cliente11} alt="cliente10"/>
                </div>
                <div  className="slide">
                    <img src={cliente12} alt="cliente10"/>
                </div>
                <div  className="slide">
                    <img src={cliente13} alt="cliente10"/>
                </div>
                <div  className="slide">
                    <img src={cliente14} alt="cliente10"/>
                </div>
            </div>
        </div>
    );
}

export default CarrouselClientes;
