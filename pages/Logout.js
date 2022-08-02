import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const nav=useNavigate();

    localStorage.removeItem('');
    nav("/");

}
export default Logout;