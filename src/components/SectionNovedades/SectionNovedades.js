import './SectionNovedades.css';
import LinkedinEmbebed from '../LinkedinEmbebed/LinkedinEmbebed';
import { useEffect, useState } from 'react';
import arrowBack from '../../imagenes/icono-arrow-back.webp';
import arrowNext from '../../imagenes/icono-arrow-next.webp';
import {getIdPublicaciones} from '../repositorioNovedadesPublicaciones';


const SectionNovedades = () => {

    const listaIdPublicaciones = getIdPublicaciones();

    const [indicePublicacion, setIndicePublicacion] = useState(0);

    useEffect(() => {},[indicePublicacion]);

    const prevPublicacion = () => {
        indicePublicacion >= 1 ? setIndicePublicacion(indicePublicacion - 1) : console.log('Primer publicacion.');
    }

    const nextPublicacion = () => {
        indicePublicacion < listaIdPublicaciones.length - 1 ? setIndicePublicacion(indicePublicacion + 1) : console.log("Último publicacion.");
    }

    return (
        <div className="container-section-novedades" id='section-novedades'>
            <div className='container-background-imagen'>
                <div className='container-novedades'>
                    <div className='novedades-title'>
                        <span className='novedades-titulo'>Novedades</span>
                        <span className='novedades-subtitulo'>¡Enterate de todas las noticias dentro de la #DEALTips! </span>
                    </div>
                    <div className='arrow-back-video'  onClick={prevPublicacion}>
                        <div className='arrow-back-video-icono'>
                            <img alt='Arrow Back' src={arrowBack}></img>
                        </div>
                    </div>
                    <div className='novedades-videos'>
                        <div className='novedades-video'>
                            <LinkedinEmbebed embedId={listaIdPublicaciones[indicePublicacion].idPublicacion} />
                        </div>
                    </div>
                    <div className='arrow-next-video' onClick={nextPublicacion}>
                        <div className='arrow-next-video-icono'>
                            <img alt='Arrow Next' src={arrowNext}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div id='section-conocenos'></div>
        </div>
    );
}

export default SectionNovedades;