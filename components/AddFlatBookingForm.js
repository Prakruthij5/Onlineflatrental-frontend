import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import { addFlatBooking } from '../actions/flatbookings';
import {Link} from 'react-router-dom';
export default function AddFlatBookingForm(props){

//const dispatch=useDispatch();
   
const initialFlatBookingFormState = {
   bookingFromDate: " ",
 
   bookingToDate: " ",
   flat: {

      
   
   flatId: 0
   },
   tenant: {
    
    
     tenant_id: 2
     
   }
 }
   
   
      

const initialFlatFormState={
   flatId: 0
   
}

const[flat,setFlat]=useState(initialFlatFormState);
const handleFlatIdInputChange=(event)=>{
   const {name,value}=event.target;
   setFlat({...flat,[name]:value});
  setFlatBooking({...flatbooking,...flat});
}

const initialTenantFormState={
   tenant_id: 0
}

const[tenant,setTenant]=useState(initialTenantFormState);
const handleTenantIdInputChange=(event)=>{
   const {name,value}=event.target;
   setTenant({...tenant,[name]:value});
  setFlatBooking({...flatbooking,...tenant});
}

/* const initialFlatAddressFormState={
   flataddress_id: 0
   
} */

/* const[flatAddress,setFlatAddress]=useState(initialFlatAddressFormState);
const handleFlatAddressIdInputChange=(event)=>{
   const {name,value}=event.target;
   setFlatAddress({...flatAddress,[name]:value});
  setFlatBooking({...flatbooking,...flatAddress});
}  */

const [flatbooking,setFlatBooking]=useState(initialFlatBookingFormState);

const handleInputChange = (event)=>{
   const {name,value} =event.target;
   console.log("check");
  console.log(event.target.name+"   "+event.target.value);
   setFlatBooking({...flatbooking,[name]:value});
   setFlatBooking({...flatbooking,...flatbooking});
   console.log(JSON.stringify(flatbooking))
}

useEffect(()=>{
   setFlatBooking({...flatbooking,flat})},[flat])

useEffect(()=>{
   setFlatBooking({...flatbooking,tenant})},[tenant])

 /* useEffect(()=>{
      setFlatBooking({...flatbooking,flatAddress})},[flatAddress])  */

const submitHandler=(event)=>{event.preventDefault();

   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); 
   var yyyy = today.getFullYear();
   today = yyyy + '-' + mm + '-' + dd;
   flatbooking.bookingFromDate=today
   flatbooking.bookingToDate=today
   console.log(today)

 //console.log(flatbooking+'from addflatbookingform')
   console.log(JSON.stringify(flatbooking))
   if( !flatbooking.bookingFromDate || !flatbooking.bookingToDate ) return;
   //dispatch(addFlatBooking(flatbooking));
   props.addFlatBooking(flatbooking);
   
   setFlatBooking(initialFlatBookingFormState);

}
return (
   <form onSubmit={submitHandler}>

<label>BookingNo</label>
<input 
type='number'
name='BookingNo'
value={flatbooking.bookingNo}
onChange={handleInputChange}/>
<br/>

 {/* <label>BookingFromDate</label>
<input 
type='date-local'
name='bookingfromdate'
value={flatbooking.bookingFromDate}
onChange={handleInputChange}/>
<br/> 


<label>BookingToDate</label>
<input 
type='date-local'
name='bookingtodate'
value={flatbooking.bookingToDate}
onChange={handleInputChange}/>
<br></br> */}  
 
<label>FlatId</label>
<input 
type='number'
name='flatId'
value={flat.flatId}
onChange={handleFlatIdInputChange}/>
<br></br>

 {/*  <label>FlatAddress_Id</label>
<input 
type='number'
name='flataddress_id'
value={flatAddress.flataddress_id}
onChange={handleFlatAddressIdInputChange}/>
<br></br>  */} 

<label>Tenant_Id</label>
<input 
type='number'
name='tenant_id'
value={tenant.tenant_id}
onChange={handleTenantIdInputChange}/>
<br></br>


  <button>Book Now</button>  
{/* <Link  onClick={()=>{props.bookFlat();console.log();}} to="/admin_user/getAllFlatBooking" className="btn btn-dark">Booked Flats</Link><br/><br/>   */}
<br/>
<br/><Link  onClick={()=>{props.bookFlat();console.log();}} to="/admin_user/getAllFlatBooking" className="btn btn-dark">booked flats</Link><br/><br/>   

<Link  onClick={()=>{props.flatsList(flat.flatId);console.log(flat.flatId);}} to="/TenantController" className="btn btn-secondary">Back</Link> 

</form>

)


}