import './SectionNosotros.css'; 
import FotoRepresentantes from '../../imagenes/DEALCARGO.png';
import FotoStaff from '../../imagenes/DEALCARGO.png';
import LogoStaff from '../../imagenes/icono-staff.webp';
import LogoObjetivo from '../../imagenes/icono-objetivo.webp';
import {getTextNosotros} from '../repositorioNosotros';

function SectionNosotros() {
    const textosPaginaNosotros = getTextNosotros();
    return (
        <div className="container-section-nosotros" id='section-nosotros'>
            <div className='container-nosotros-title'>
                <h2>{textosPaginaNosotros.titulo}</h2>
            </div>
            <div className="container-nosotros-border">
                <div className='container-nosotros-1'>
                    <div className='nosotros-1-duenios'>
                        <img alt='Foto-duenios' src={FotoRepresentantes}></img>
                    </div>
                    <div className='nosotros-1-detalles'>
                        <span><b>{textosPaginaNosotros.subTitulo}</b></span>
                        <span>{textosPaginaNosotros.descripcion}</span>
                    </div>
                </div>
                <div className='container-nosotros-2'>
                    <div className='nosotros-2-items'>
                        <div className='nosotros-2-items-1'>
                            <div className='nosotros-2-items-1-logo'>
                                <img alt='logo-staff' src={LogoStaff}></img>
                                <span><b>{textosPaginaNosotros.titulo1}</b></span>
                            </div>
                            <div className='nosotros-2-items-1-detalle'>
                                <span>{textosPaginaNosotros.detalle1}</span>
                            </div>
                        </div>
                        <div className='nosotros-2-items-2'>
                            <div className='nosotros-2-items-2-logo'>
                                <img alt='logo-objetivo' src={LogoObjetivo}></img>
                                <span><b>{textosPaginaNosotros.titulo2}</b></span>
                            </div>
                            <div className='nosotros-2-items-2-detalle'>
                                <span>{textosPaginaNosotros.detalle2}</span>
                            </div>
                        </div>
                    </div>
                    <div className='nosotros-2-staff'>
                        <img alt='Foto-staff' src={FotoStaff}></img>
                    </div>
                </div>
                <div className='container-nosotros-conocenos'>
                    <a href="https://www.linkedin.com/company/deal-cargo/" target="_blank" rel="noreferrer">
                        <div className="buttom-conocenos">
                            <h3>¡Conócenos!</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SectionNosotros;