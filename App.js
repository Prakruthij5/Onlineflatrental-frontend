import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import React ,{useEffect, useState} from "react";
import {BrowserRouter, Routes ,Route ,  Link ,useNavigate } from 'react-router-dom'
import AddLandlordForm from "./components/AddLandlordForm";
import LandlordList from "./components/LandlordList";
import apiClient from './http-common';
import Home from './pages/Home';
import Layout from './pages/Layout';
import EditLandlordForm from './components/EditLandlordForm';
import Landlord from './pages/Landlord';
import Tenant from './pages/Tenant';
import UserLogin from './pages/UserLogin';
import UserController from './pages/UserController';
import TenantController from './pages/TenantController';
import LandlordController from './pages/LandlordController';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/admin';
import AdminLogin from './pages/AdminLogin';


import FlatBookingList from './components/FlatBookingList';
import EditFlatBookingForm from './components/EditFlatBookingForm';
import AddFlatBookingForm from './components/AddFlatBookingForm';

import AddLandlordFlatForm from './components/AddLandlordFlatsForm';
import EditFlatForm from './components/EditFlatForm';
import FlatList from './components/FlatList';
import AdminController from './pages/AdminController.js';
import AddTenantForm from './components/AddTenantForm';
import EditTenantForm from './components/EditTenantForm';
import TenantList from './components/TenantList';
import LandlordLogin from './pages/LandlordLogin';
import TenantLogin from './pages/TenantLogin';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';



function App() {
  const[flatId,setFlatId]=useState(); 
  const navigate=useNavigate();
  
  const [landlordData,setLandlords]=useState([]);

      useEffect(()=>{apiClient.get('/admin_user/getAllLandlord').then((response)=>{
        setLandlords(response.data);
      })},[])
  
      
  const [editinglandlord,setEditingLandlord]=useState(false);
  
  const initialLandlordFormState = {
    landlordId:0,
    landlordName:'',
    landlordAge:0,
    user: {
      userId: 0
    }
    
      }
  
  
  const [currentlandlord,setcurrentLandlord]=useState(initialLandlordFormState);

  async function addLandlord(landlord){
    try{
    const response=await apiClient.post('/Admin/addLandlord',landlord);
      setLandlords([...landlordData,response.data]);
      console.log(landlordData);
      
    }catch(err){
      console.log(err)
    }
  }

    async function deleteLandlord(landlordId){
      await apiClient.delete(`/Admin/deleteLandlord/${landlordId}`);
        setLandlords(landlordData.filter((landlord)=>landlord.landlordId !== landlordId));
      }
      
      const editLandlord=(landlord)=>{
    
        setEditingLandlord(true);
          setcurrentLandlord
          ({landlordId:landlord.landlordId,landlordName:landlord.LandlordName,
            landlordAge:landlord.landlordAge})
         
      }

      const updateLandlord = (landlordId,updatedLandlord)=>{
  
        setEditingLandlord(false);
        apiClient.put(`/Admin/updatelandlord/${landlordId}`,updatedLandlord).then((response)=>
        {
      
          console.log('landlord updated');
          setLandlords(landlordData.map((landlord)=>
        (landlord.landlordId === landlordId ? updatedLandlord : landlord)));
        })
        
      }


      

      const [flatData,setFlats]=useState([]);

      //when App component gets loaded , a call to api will render the products list as a response
      //which we are setting to the products
      useEffect(()=>{apiClient.get('/admin_user/viewAllFlat').then((response)=>{
        setFlats(response.data);
      })},[])
      const [editingflat,setEditingFlat]=useState(false);
  
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
    
  
  
  
  const [currentFlat,setCurrentFlat] 
       =useState(initialFlatFormState);
  
     //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
     //brand price name on submission  
  async function addFlat(flat){
    try{
    const response=await apiClient.post('/User/addFlat',flat);
      setFlats([...flatData,response.data]);
      console.log(flatData);
      
    }catch(err){
      //console.log(err)
    }
    
  }
  async function deleteFlat(flatId){
    await apiClient.delete(`/Admin/deleteFlat/${flatId}`);
      setFlats(flatData.filter((flat)=>flat.flatId !== flatId));
    }
    
    const editFlat=(flat)=>{
  
      setEditingFlat(true);
        setCurrentFlat
        ({flatId:flat.flatId,cost:flat.cost,availability:flat.availability});
       
    }

    const bookFlat=(flatId)=>{

        navigate(`/User/addFlatBooking`);
        setFlatId(flatId);
    }
    
    const updateFlat = (flatId,updatedFlat)=>{
    
      setEditingFlat(false);
      apiClient.put(`/Admin/updateFlat/${flatId}`,updatedFlat).then((response)=>
      {
    
        console.log('flat updated');
        setFlats(flatData.map((flat)=>
      (flat.flatId === flatId ? updatedFlat : flatId)));
  
      })
      
    }
    



      
const [tenantData,setTenants]=useState([]);

//when App component gets loaded , a call to api will render the products list as a response
//which we are setting to the products
useEffect(()=>{apiClient.get('/admin_user/viewAllTenant').then((response)=>{
  setTenants(response.data);
})},[])


const [editingTenant,setEditingTenant]=useState(false);

const initialTenantFormState = {


tenantName: '',
tenant_age: 0,

user: {
  
  userId: 0

}
}





const [currentTenant,setCurrentTenant] 
 =useState(initialTenantFormState);

//child component --AddProductForm child -App is parent ,product object in the form of input fields form 
//brand price name on submission  
async function addTenant(tenant){
try{
const response=await apiClient.post('/Admin/addTenant',tenant);
setTenants([...tenantData,response.data]);
console.log(tenantData);

}catch(err){
//console.log(err)
}

}



async function deleteTenant(tenant_id){
await apiClient.delete(`/Admin/deleteTenant/${tenant_id}`);
setTenants(tenantData.filter(tenant=>tenant.tenant_id !== tenant_id));
}

const editTenant=(tenant)=>{

setEditingTenant(true);
  setCurrentTenant
  ({tenant_id:tenant.tenant_id,tenant_age:tenant.tenant_age,tenantName:tenant.tenantName})
 
}

const updateTenant= (tenant_id,updatedTenant)=>{

setEditingTenant(false);
apiClient.put(`/Admin/updateTenant/${tenant_id}`,updatedTenant).then((response)=>
{

  console.log('tenant updated');
  setTenants(tenantData.map((tenant)=>
(tenant.tenant_id === tenant_id ? updatedTenant : tenant)));

})

}



      
      const [flatbookings,setFlatBookings]=useState([]);

    //when App component gets loaded , a call to api will render the products list as a response
    //which we are setting to the products
    useEffect(()=>{apiClient.get('/admin_user/getAllFlatBooking').then((response)=>{
      setFlatBookings(response.data);
    })},[])


    
const [editingFlatbooking,setEditingFlatbooking]=useState(false);

const initialFlatBookingFormState = {
  bookingFromDate: "2022-07-28",
     
      bookingToDate: "2022-07-28",
      flat: {
        flatId: 0
      },
      tenant: {
        
        tenant_id: 0
        
      }
    }
  



const [currentFlatBooking,setCurrentFlatBooking] 
     =useState(initialFlatBookingFormState);

   //child component --AddProductForm child -App is parent ,product object in the form of input fields form 
   //brand price name on submission  
async function addFlatBooking(flatbooking){
  try{
  const response=await apiClient.post('/User/addFlatBooking',flatbooking);
    setFlatBookings([...flatbookings,response.data]);
    console.log(flatbookings);
    
  }catch(err){
    //console.log(err)
  }
  
}



async function deleteFlatBooking(bookingNo){
  await apiClient.delete(`/User/deleteFlatBooking/${bookingNo}`);
    setFlatBookings(flatbookings.filter((flatbooking)=>flatbooking.bookingNo !== bookingNo));
  }
  
  const editFlatBooking=(flatbooking)=>{

    setEditingFlatbooking(true);
      setCurrentFlatBooking
      ({bookingNo:flatbooking.bookingNo,bookingFromDate:flatbooking.bookingFromDate,
        bookingToDate:flatbooking.bookingToDate})
     
  }
  
  const updateFlatBooking = (bookingNo,updatedFlatBooking)=>{
  
    setEditingFlatbooking(false);
    apiClient.put(`/admin/updateFlatBooking/${bookingNo}`,updatedFlatBooking).then((response)=>
    {
  
      console.log('flatbooking updated');
      setFlatBookings(flatbookings.map((flatbooking)=>
    (flatbooking.bookingNo === bookingNo ? updatedFlatBooking : flatbooking)));

    })
    
  }



      
      
      
  return (<div class='bg_image' >

    <div className='container'>
  



    <div className='flex-row'>
      <div className='flex-large'>
        {editinglandlord ? (
        <div>
          <h2>Edit Landlord Form </h2>
          <EditLandlordForm
           setEditingLandlord={setEditingLandlord}
           currentLandlord={currentlandlord}
           updateLandlord={updateLandlord}
            


           />
           </div>):(

            

   
   
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
          <Route path="landlord" element={<Landlord/>}/>
          <Route path="tenant" element={<Tenant/>}/>
          <Route path="userlogin" element={<UserLogin/>}/>
        
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="Contact" element={<Contact/>}/>

          <Route path="admin" element={<Admin/>}/>
          <Route path="adminlogin" element={<AdminLogin/>}/>
          <Route path="admincontroller" element={<AdminController/>}/>
          <Route path="TenantLogin" element={<TenantLogin/>}/>
          <Route path="LandlordLogin" element={<LandlordLogin/>}/>
          

          <Route path="usercontroller" element={<UserController/>}/>
          <Route path="tenantcontroller" element={<TenantController/>}/>
          <Route path="landlordcontroller" element={<LandlordController/>}/>
          
          
          

          


{/* Route path for landlord  */}            

    <Route path='/' element={<LandlordList 
    landlordData={landlordData} 
         editLandlord={editLandlord}
         deleteLandlord={deleteLandlord} />} ></Route>
          <Route path='/Admin/addLandlord' element={<AddLandlordForm addLandlord={addLandlord}/>} />
         <Route path='/admin_user/getAllLandlord' element={<LandlordList 
         landlordData={landlordData} 
         editLandlord={editLandlord}
         deleteLandlord={deleteLandlord} />}>
         </Route>
         <Route path="/Admin/updatelandlord/:landlordId" element={<EditLandlordForm /> }></Route>


{/* Route path for flats */}

  <Route path='/' element={<FlatList 
  flatData={flatData} 
  bookFlat={bookFlat}
 editFlat={editFlat}
 deleteFlat={deleteFlat} />} ></Route>
<Route exact path='/User/addFlat' element={<AddLandlordFlatForm addFlat={addFlat}/>} />      
 <Route path='/admin_user/viewAllFlat' element={<FlatList 
  flatData={flatData} 
 editFlat={editFlat}
 deleteFlat={deleteFlat} />}>

 </Route>
 <Route path="/flats/:flatId" element={<EditFlatForm /> }></Route>


{/* Route path for tenant */}

 <Route path='/' element={<TenantList 
tenantData={tenantData} 
     editTenant={editTenant}
     deleteTenant={deleteTenant} />} ></Route>
      <Route exact path="/Admin/addTenant" element={<AddTenantForm addTenant={addTenant}/>} />
     
     <Route path='/admin_user/viewAllTenant' element={<TenantList 
tenantData={tenantData} 
     editTenant={editTenant}
     deleteTenant={deleteTenant} />}>

     </Route>
     <Route path="/tenants/:tenant_id" element={<EditTenantForm /> }></Route>  



{/* Route path for FlatBooking */}

     <Route path='/' element={<FlatBookingList
     flatbookingData={flatbookings}
 editFlatBooking={editFlatBooking}
 deleteFlatBooking={deleteFlatBooking} />} ></Route> 
  <Route  path="/User/addFlatBooking" element={<AddFlatBookingForm addFlatBooking={addFlatBooking} flatId={flatId}/>} />
  
 
  <Route path='/admin_user/getAllFlatBooking' element={<FlatBookingList
  flatbookingData={flatbookings}
  editFlatBooking={editFlatBooking}
   deleteFlatBooking={deleteFlatBooking} />}>
  </Route>
  <Route path="/flatBookings/:bookingNo" element={<EditFlatBookingForm /> }></Route>
  











        
        </Route>

        </Routes>
        
    
    
    
    )}</div></div></div></div>
)}



export default App;