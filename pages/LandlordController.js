import {Link} from 'react-router-dom';
const LandlordController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin_user/viewAllFlat"} className="nav-link">
             List of Flats
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/User/addFlat"} className="nav-link">
              Add Flat
            </Link>

            
          </li>
        </div>
    )
}

export default LandlordController;