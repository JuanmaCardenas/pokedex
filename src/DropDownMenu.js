import Dropdown from 'react-bootstrap/Dropdown';
import './dropDownMenu.css'


const DropDownMenu = () => {
    return(
        <Dropdown className='custom-dropdown'>
        <Dropdown.Toggle className='custom-dropdown-toggle' variant="success" id="dropdown-basic"> Select a Generation </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/151">1st Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/251">2nd Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/386">3rd Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/493">4th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/649">5th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/721">6th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/809">7th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/pokedex/898">8th Generation</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default DropDownMenu;