import {Link} from 'react-router-dom';
const AdminController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Admin/addLandlord"} className="nav-link">
             Add Landlord
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Admin/addTenant"} className="nav-link">
              Add Tenant
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to={"/admin_user/getAllFlatBooking"} className="nav-link">
            List of Booking Flat
            </Link>
          </li>
            
        </div>
    )
}

export default AdminController;