import {Link} from 'react-router-dom';
const AdminController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/Admin/addLandlord"} className="nav-link">
            <b> <h1>Add Landlord </h1></b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/Admin/addTenant"} className="nav-link">
             <b><h1>Add Tenant </h1></b>
            </Link>
            </li>
          
          <li className="nav-item">
            <Link to={"/admin_user/getAllFlatBooking"} className="nav-link">
            <b><h1>List of Booking Flat</h1></b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin_user/getAllLandlord"} className="nav-link">
             <b><h1>List Of landlords</h1></b>
            </Link>
          </li>
          <Link  onClick={()=>{}} to="/admin" >Logout</Link> 
        </div>
    )
}

export default AdminController;