import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import banner from '../banner.jpg';



const Home = ()=>{

    return(
    <div class='bg_home'>
        <Navbar/>
        <section>
         <h1> MAGICBRICKS</h1> 
         <br/>
         
         <Link to ="register">Register</Link>  
         <br/><br/>
         {/* <Link to ="login">Login</Link> */}

        </section>
        </div>
    )
}

export default Home;