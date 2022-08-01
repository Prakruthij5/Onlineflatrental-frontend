import { Dropdown } from "react-bootstrap";


function Register (){

  return(
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           User Role 
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "tenant">Tenant</Dropdown.Item><br/><br/>
            <br/><br/><Dropdown.Item href = "landlord">Landlord</Dropdown.Item><br/><br/>
            <Dropdown.Item href = "admin">Admin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  
    
  )

}

export default Register;