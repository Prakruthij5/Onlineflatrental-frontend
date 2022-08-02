import React ,{useState,useEffect, useContext}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContent from '@mui/material/CardContent';

import {retrieveFlats,}from '../actions/flats'
import { Grid } from '@mui/material';
import FlatContext from '../context/AuthProvider';


export default function FlatsList(props){
  //we have dispatched the actioncreator retrieveProducts
  //in the component loading time once only
    const dispatch=useDispatch();
    //const {flatId,setFlatId}=useContext(FlatContext);
    
    const [currentFlats,setCurrentFlat]=useState({});
    const [currentIndex,setCurrentIndex]=useState(-1);
    //this products array will hold the state of products 
    const flats = useSelector((state)=>state.flats);
     

    useEffect(()=>{
        dispatch(retrieveFlats());
      },[]);

    
    const refreshData=()=>{
        setCurrentFlat(null);
        setCurrentIndex(-1);
    }
 

    const setActiveFlat = (flat,index)=>{
        setCurrentFlat(flat);
        setCurrentIndex(index);

    }

    //any other method
    //for sorting
    //for searching 

/* const clickHandler=(flat)=>{
    setCurrentFlat(flat)
    setFlatId(flat.flatId);
    console.log(flatId+"***************");


} */

return(<div className ='container mr-5 '>
         
     <div className='card-deck'>
  {/* <div className='card text-center'> */}
  <div className='col  mb-2'>
               <div className='card h-100'>
  
      <h4 className='card-title'>Flats</h4>
     

      
  <Grid 
   
  container
   spacing={2}
   direction="row"
   justify="flex-start"
   alignItems="flex-start" style={{margin :'.35rem' , margin :'.5rem' ,margin :'.1rem'}}
   
   >
  { flats?.length > 0 ? (
  flats.map((flat)=>(
<Grid key={flat.flatId}>
  <Card style={{ width: '18rem',margin :"2rem" ,backgroundColor:"pink",color:"black" }}>
      {/* <Card.Img variant="top"  width="100px" height='180' /> */}

      <Card.Body>
        <Card.Title>FLAT DETAILS</Card.Title>
        <Card.Text>
        

    <CardContent>


           Id:{flat.flatId}
           <br/><br/>
           Flat Id :{flat.flatId}<br/>
           Cost :{flat.cost}<br/>
           Availability :{flat.availability}<br/>
           FlatAddress_Id :{flat.flatAddress?.flatAddress_id}<br/>
          State :{flat.flatAddress?.state}<br/>
           Pin:{flat.flatAddress?.pin}<br/>
          City:{flat.flatAddress?.city}<br/>
           Street:{flat.flatAddress?.street}<br/>
          Country : {flat.flatAddress?.country}<br/><br/>
          
          
        {/* <td><button 
        onClick={()=>props.bookFlat(flat.flatId)}
        className="button muted-button">Book</button></td>
 */}
    
    {/* <Button variant='primary' onClick={()=>{clickHandler(flat)}}>
        
        <Link to ={"/User/addFlatBooking"} >Book</Link>
        </Button>  */}
           <Link  onClick={()=>{props.bookFlat(flat.flatId);console.log(flat.flatId);}} to="/User/addFlatBooking" className="btn btn-dark">Book Flat</Link> <br/><br/>
        
          <Link  onClick={()=>{props.flatsList(flat.flatId);console.log(flat.flatId);}} to="/TenantController" className="btn btn-secondary">Back</Link>



           </CardContent></Card.Text></Card.Body></Card></Grid>))):( 
            <CardContent>
              No Flats
            </CardContent>
           )}
        
        
        
    </Grid>
    </div>
            </div>
    </div>
    </div>
  

)
}