import React,{useState,useEffect} from 'react';
import { addLandlord } from '../actions/landlords';

export default function AddLandlordForm(props){

  const initialLandlordFormState={
    landlordId:0,
    landlordName:'',
    landlordAge:0,
    user: {
      userId: 0
    }
       
    
      }
        
          
          const initialUserFormState={
             
              userId: 0
            

          }
      const [user,setUser]=useState(initialUserFormState);
          const handleUserIdChange=(event)=>{
            const {name,value}=event.target;
            setUser({...user,[name]:value});
            setLandlord({...landlord,...user});
          }
      
        

    const[landlord,setLandlord]=useState(initialLandlordFormState);

    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setLandlord({...landlord,[name]:value});

        
    }

    
    useEffect(()=>{
      setLandlord({...landlord,user})},[user])


   

    const submitHandler=(event)=>{event.preventDefault();
   /*  if( !landlord.landlordName || !landlord.landlordAge || !landlord.flatList.flatId
         || !landlord.flatAddress.flataddress_id || !landlord.user.userId) */ 
    //      return;
    //console.log(landlord+'from addlandlordform')
    console.log(JSON.stringify(landlord));
    props.addLandlord(landlord);
    setLandlord(initialLandlordFormState);
    }

     
    return(
        <form onSubmit={submitHandler}>

           {/*  <label>landlordId</label>
            <input 
            type='number'
            name='landlordId'
            value={landlord.landlordId}
            onChange={handleInputChange}/>
          <br></br> */}

       

        <label>landlordName</label>
        <input 
        type='text'
        name='landlordName'
        value={landlord.landlordName}
        onChange={handleInputChange}/>
        <br></br><br/>
       

        <label>landlordAge</label>
        <input 
        type='number'
        name='landlordAge'
        value={landlord.landlordAge}
        onChange={handleInputChange}/>
        <br></br><br/>
        
        {/*  <label>flatId</label>
        <input 
        type='number'
        name='flatId'
        value={landlord.flatList.flatId}
        onChange={handleInputChange}/>
        <br></br>

        <label>flataddress_id</label>
        <input 
        type='number'
        name='flataddress_id'
        value={landlord.flataddress_id}
        onChange={handleInputChange}/>
        <br></br>
  */}

          <label>userId</label>
        <input 
        type='number'
        name='userId'
        value={user.userId}
        onChange={handleUserIdChange}/>
        <br></br><br/> 
        

        <button type='submit'>Add New landlord</button>
        <br/><br/>
        

            </form>
    )
}