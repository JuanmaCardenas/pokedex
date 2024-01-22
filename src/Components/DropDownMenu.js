import Dropdown from 'react-bootstrap/Dropdown';
import './dropDownMenu.css'


const DropDownMenu = () => {
    return(
        <Dropdown className='custom-dropdown'>
        <Dropdown.Toggle className='custom-dropdown-toggle' variant="success" id="dropdown-basic"> Select a Generation </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item className="custom-dropdown-item" href="/151/to/0">1st Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/100/to/151">2nd Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/135/to/251">3rd Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/107/to/386">4th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/156/to/493">5th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/72/to/649">6th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/88/to/721">7th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/96/to/809">8th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/120/to/905">9th Generation</Dropdown.Item>
          <Dropdown.Item className="custom-dropdown-item" href="/1302/to/0">Show all</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
}

export default DropDownMenu;