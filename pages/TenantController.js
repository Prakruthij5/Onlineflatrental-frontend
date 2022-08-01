import {Link} from 'react-router-dom';
const TenantController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin_user/getAllLandlord"} className="nav-link">
             List Of landlords
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin_user/viewAllFlat"} className="nav-link">
             List Of Flats
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/User/addFlatBooking"} className="nav-link">
             Booking Flat
            </Link>
          </li>
            
        
          
        </div>
    )
}

export default TenantController;