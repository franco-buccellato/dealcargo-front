import SectionContactanos from '../SectionContactanos/SectionContactanos';
import SectionServicios from '../SectionServicios/SectionServicios';
import SectionNosotros from '../SectionNosotros/SectionNosotros';
import SectionClientes from '../SectionClientes/SectionClientes';
import SectionNovedades from '../SectionNovedades/SectionNovedades';
import Footer from '../Footer/Footer';
import Maps from '../Maps/Maps';
import Copyright from '../Copyright/Copyright';


const LandingPage = () => {
    return (
        <div>
            <div><SectionContactanos/></div>
            <div><SectionServicios/></div>
            <div><SectionNosotros/></div>
            <div><SectionClientes/></div>
            <div><SectionNovedades/></div>
            <div><Footer/></div>
            <div><Maps/></div>
            <div><Copyright/></div>
        </div>
    );
}
export default LandingPage;