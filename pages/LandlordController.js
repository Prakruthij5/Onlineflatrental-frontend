import {Link} from 'react-router-dom';
const LandlordController=()=>{
  
    return(
<div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin_user/viewAllFlat"} className="nav-link">
             <b><h1>List of Flats</h1></b>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/User/addFlat"} className="nav-link">
             <b> <h1>Add Flat</h1></b>
            </Link>
<br/>
<br/>
<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Link  onClick={()=>{}} to="/Home" className="btn btn-success">Logout</Link> 
          </li>
        </div>
    )
}

export default LandlordController;