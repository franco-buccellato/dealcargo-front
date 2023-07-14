import './CarrouselClientes.css';
import cliente1 from '../../imagenes/Logo-Bimbo.png'
import cliente2 from '../../imagenes/Logo-Aires.svg'
import cliente3 from '../../imagenes/Logo-Asecon.png'
import cliente4 from '../../imagenes/Logo-Fasten.jpg'
import cliente5 from '../../imagenes/Logo-GrupoHydralpng.png'
import cliente6 from '../../imagenes/Logo-Machvision.png'
import cliente7 from '../../imagenes/Logo-Powercom.png'

function CarrouselClientes() {
    const listaCliente = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7];

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
