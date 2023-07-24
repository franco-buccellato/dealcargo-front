import './CarrouselClientes.css';
import cliente1 from '../../imagenes/Logo-Bimbo.png'
import cliente2 from '../../imagenes/Logo-Aires.svg'
import cliente3 from '../../imagenes/Logo-Asecon.png'
import cliente4 from '../../imagenes/Logo-Fasten.png'
import cliente5 from '../../imagenes/Logo-GrupoHydralpng.png'
import cliente6 from '../../imagenes/Logo-Machvision.png'
import cliente7 from '../../imagenes/Logo-Powercom.png'
import cliente8 from '../../imagenes/Logo-Gimnasia.png'
import cliente9 from '../../imagenes/Logo-Cableparts.png'
import cliente10 from '../../imagenes/Logo-Alucomax.png'
import cliente11 from '../../imagenes/Logo-Puntoycoma.png'

function CarrouselClientes() {
    const listaCliente = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11];

    return (
        <div  className="slider">
            <div  className="slide-track">
                {
                    listaCliente.map(
                        (unCliente, indice) => 
                        {
                            return (
                                <div className="slide">
                                    <img src={unCliente} alt={indice}/>
                                </div>
                            )               
                        }
                    )
                }
            </div>
        </div>
    )
}

export default CarrouselClientes;
