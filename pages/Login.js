import { Dropdown } from "react-bootstrap";


function Login (){

  return(
        <Dropdown>
          <Dropdown.Toggle variant = "success" id="dropdown-basic">
           User Role
          </Dropdown.Toggle>

          <Dropdown.Menu><br/>
            <br/><br/><Dropdown.Item href = "TenantLogin">Tenant</Dropdown.Item><br/><br/>
            <br/><br/><Dropdown.Item href = "LandlordLogin">Landlord</Dropdown.Item><br/><br/>
         
            <br/><br/><Dropdown.Item href = "adminLogin">Admin</Dropdown.Item><br/><br/>
          </Dropdown.Menu>
        </Dropdown>
  
    
  )

}

export default Login;