import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import banner from '../banner.jpg';
import '../CSS/home.css';


const Home = ()=>{

    return(
    <div class='bg_home'>
        <Navbar/>
        <section>
         <h2><b> MAGICBRICKS</b></h2> 
         <br/>
         <br/><br/>
         <p><h1><b>Choose The Best Way to Find your Dream Home</b></h1></p>
         <br/>
         <br/><br/><br/><br/>
         <Link to ="register">Register</Link>  
         <br/><br/>
         {/* <Link to ="login">Login</Link> */}

        </section>
        </div>
    )
}

export default Home;