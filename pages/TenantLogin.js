import {useRef,useState,useEffect} from 'react'

import {Link, useNavigate} from 'react-router-dom';
import apiClient from '../http-common';

const TenantLogin = ()=>{

    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    
    
    const [errMsg,setErrMsg] = useState();

    const [success, setSuccess] = useState(false);

    useEffect(()=>{userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[userName,password])

    const submitHandler = async (e)=>{
        e.preventDefault();
        const response = await apiClient.post(`/LandlordAndTenant/userLogin`,{userName,password})
        localStorage.setItem('userDetails',JSON.stringify(response.data))
        setSuccess(true);
        localStorage.setItem('tenantId',response.data.userId);
        console.log(response);
        navigate('/TenantController');
        
    }

    return (

        <>
          {success ? (
           <section>

           successful!!!!
           <Link to ="TenantController"></Link>

           </section>

          ):(

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
             aria-live="assertive">{errMsg}</p>
             <h1>Sign In</h1>
             <form onSubmit={submitHandler}>

            <label htmlFor='username'>Username</label>
            <input type='text' 
            id='username'
            ref={userRef}
            autoComplete="off"
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
            required
    />
       <label htmlFor='password'>Password</label>
            <input
             type='password' 
            id='password'
            autoComplete="off"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
    />




   <button>Login </button>
             </form>
             <p> Need an account<br/>
            
        
                <Link to="/Tenant">Register</Link>
              
                </p>
        </section>
          )
}
        </>
     )

}

export default TenantLogin;