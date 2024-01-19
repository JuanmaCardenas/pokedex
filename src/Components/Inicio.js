import DropDownMenu from "./DropDownMenu";
import Header from './Header'
import './Inicio.css'

const Inicio = () =>{
    return(
        <div className="Inicio">
            <Header />
            <div className="Dropdown"><DropDownMenu /></div>
        </div>
    );
}

export default Inicio