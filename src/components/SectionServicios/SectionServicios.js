import './SectionServicios.css';
import servicio1 from '../../imagenes/servicios1.png';
import servicio2 from '../../imagenes/servicios2.png';
import servicio3 from '../../imagenes/servicios3.png';
import {getTextServicios} from '../repositorioServicios.js';

function SectionServicios() {
    const textosServicios = getTextServicios();
    return (
        <div className="section-servicios" id='section-servicios'>
            <h2 className='section-servicos-tittle'>Nuestros Servicios</h2>
            <div className="container-section-servicios-base">
                <div className="servicios">
                    <img className='servicio-base' alt='Logo Servicio 1' src={servicio1} width={240} height={240}></img>
                    <h4 className='servicio-text'>{textosServicios.servicio1}</h4>
                    <ul className="lista-servicios-1-general">
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle1}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle2}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle3}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle4}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle5}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle6}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle7}</li>
                        <li className="linea-servicios-1"><ion-icon name="arrow-forward-outline"></ion-icon>{textosServicios.servicio1Detalle8}</li>
                    </ul>
                </div>
                <div className="servicios">
                    <img className='servicio-base' alt='Logo Servicio 2' src={servicio2} width={240} height={240}></img>
                    <h4 className='servicio-text'>{textosServicios.servicio2}</h4>
                    <ul className="lista-servicios-2-general">
                        <li className="linea-servicios-2"><ion-icon name="caret-forward-outline"></ion-icon>{textosServicios.servicio2Detalle1}</li>
                        <li className="linea-servicios-2"><ion-icon name="caret-forward-outline"></ion-icon>{textosServicios.servicio2Detalle2}</li>
                        <li className="linea-servicios-2"><ion-icon name="caret-forward-outline"></ion-icon>{textosServicios.servicio2Detalle3}</li>
                        <li className="linea-servicios-2"><ion-icon name="caret-forward-outline"></ion-icon>{textosServicios.servicio2Detalle4}</li>
                        <li className="linea-servicios-2"><ion-icon name="caret-forward-outline"></ion-icon>{textosServicios.servicio2Detalle5}</li>
                    </ul>
                </div>
                {/* <div className="servicios" onClick={() => setServicioMas()}> */}
                <div className="servicios">
                    <img className='servicio-base' alt='Logo Servicio 3' src={servicio3} width={240} height={240}></img>
                    <h4 className='servicio-text'>{textosServicios.servicio3}</h4>
                    <ul className="lista-servicios-3-general">
                        <li className="linea-servicios-3"><ion-icon name="chevron-forward-outline"></ion-icon>{textosServicios.servicio3Detalle1}</li>
                        <li className="linea-servicios-3"><ion-icon name="chevron-forward-outline"></ion-icon>{textosServicios.servicio3Detalle2}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SectionServicios;