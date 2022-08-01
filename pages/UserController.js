import {Link} from 'react-router-dom';
const UserController=()=>{
  
    return(
<div className="navbar-nav mr-auto">

            <li className="nav-item">
            <Link to={"/Tenant"} className="nav-link">
              Tenant Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/Landlord"} className="nav-link">
              Landlord Login
            </Link>
          </li>



          <li className="nav-item">
            <Link to={"/admin_user/getAllFlatBooking"} className="nav-link">
              Get All FlatBookings
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/admin_user/viewAllFlat"} className="nav-link">
             Get all Flats
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/User/addFlat"} className="nav-link">
             Add Flats
            </Link>
          </li>
    
          <li className="nav-item">
            <Link to={"/User/addFlatBooking"} className="nav-link">
             Add FlatBooking
            </Link>
          </li>
    
          
        </div>
    )
}

export default UserController;