import {Link} from 'react-router-dom';
const TenantController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          
          <li className="nav-item">
            <Link to={"/admin_user/viewAllFlat"} className="nav-link">
             <b><h1>List Of Flats</h1></b>
            </Link>
          </li>

          

        
          
        </div>
    )
}

export default TenantController;