import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
//import { useDispatch } from 'react-redux';
//import { addFlat } from '../actions/flats';
export default function AddLandlordFlatsForm(props){
   //const dispatch=useDispatch();

    const initialFlatFormState = {
       flatId:0,
         availability: '',
            cost: 0,
            flatAddress: {
            flatAddress_id:0,
              city: '',
              country: '',
               pin: 0,
              state: '',
              street: ''
              }
           }
     const initialFlatAddressFormState={
        street:'',
        pin:0,
        city:'',
        state:'',
        country:''
    } 

   const [flatAddress, setFlatAddress] = useState(initialFlatAddressFormState);
    
    const  handleFlatAddressChange=(event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
   
        setFlatAddress({...flatAddress,
          [name]: value
        });
      } 

    const [flat, setFlat] = useState(initialFlatFormState);
    
   const  handleInputChange=(event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
   
        setFlat({...flat,
          [name]: value
        });
      }
         useEffect(()=>{
            setFlat({...flat,flatAddress})},[flatAddress])
   

    const submitHandler=(event)=>{event.preventDefault();
   /*  if(!flat.cost || !flat.availability || !flat.flatAddress.street || !flat.flatAddress.city 
        || !flat.flatAddress.pin
        || !flat.flatAddress.state || !flat.flatAddress.country ) return;  */
        

    console.log(JSON.stringify(flat)+" from addflatform")

    props.addFlat(flat);
    //dispatch(addFlat(flat));
    setFlat(initialFlatFormState);
    }
    return(

        <form onSubmit={submitHandler} className="flat">

             <label>FlatId</label><br/>
             <input 
            type='number'
            name='flatId'
            value={flat.flatId}
            onChange={handleInputChange}/>
            <br/> 

            <label>Cost</label><br/>
            <input 
             type='number'
             name='cost'
             value={flat.cost}
             onChange={handleInputChange}/>

            <br/>
            <label>Avaiability</label>

         <select name="availability" id="availability"
         onChange={handleInputChange}>
         <option value=" "></option>
         <option value="Available">Available</option>
         <option value="Not Available">Not Available</option>
         </select>
           
            <br/>
         <label>FlatAddress_Id</label><br/>
            <input 
             type='number'
             name='flataddress_id'
             value={flatAddress.flatAddress_id}
             onChange={handleFlatAddressChange}/>
           
            <br/> 
            <label>Street</label>
            <select name="street" id="street" 
              onChange={handleFlatAddressChange}
              >
              <option value=" "></option>
                <option value="BookCenter">BookCenter</option>
                <option value="RaoStreet">RaoStreet</option>
                <option value="WalkerStreet">WalkerStreet</option>
                <option value="WillStreet">WillStreet</option>
          </select>
           
            <br/>
            <label>City</label>
            <select name="city" id="city" 
              onChange={handleFlatAddressChange}
              >
              <option value=" "></option>
                <option value="Guntur">Guntur</option>
                <option value="Bapatla">Bapatla</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
          </select>
           
            <br/>
            <label>Pin</label><br/>
            <input 
             type='number'
             name='pin'
             value={flatAddress.pin}
             onChange={handleFlatAddressChange}/>
           
            <br/>
            <label>State</label>
            <select name="state" id="state" 
              onChange={handleFlatAddressChange}
              >
               <option value=" "></option>
                <option value="AndhraPradesh">AndhraPradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharashtra">Maharashtra</option>
                </select>
           
            <br/>
            <label>Country</label>
            <select name="country" id="country" 
              onChange={handleFlatAddressChange}
              >
               <option value=" "></option>
               <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
                <option value="Australia">Australia</option>
                </select>
           
            <br/>
            
           <input type='submit' value='Add New Flat'/><br/><br/> 
           {/* <td ><Link  onClick={()=>{props.addFlat(flat.flatId);console.log(flat.flatId);}} to="/admin_user/viewAllFlat" className="btn btn-dark">Add Flat</Link></td><br/> */}
           <Link  onClick={()=>{props.flatsList();console.log();}} to="/admin_user/viewAllFlat" className="btn btn-secondary">Back</Link>

        </form>

    )
}