import React,{useEffect, useState} from "react";
import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import { useNavigate,useParams } from "react-router-dom";
import {editCus, getCus} from '../Api/Api.js'


const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
`



const EditCUstomer = () =>{

    const  defaultValue = {
        Fname:'',
        Lname:'',
        email:'',
        phone:'',
        checkin:'',
        checkout:''
      }
    
      const [customer, setCustomer] = useState(defaultValue)
      const navigate = useNavigate()
      const {_id} = useParams()

      useEffect(()=>{
        LoaduserDetails()
      },[])

      const LoaduserDetails = async (_id) =>{
        const response = await getCus(_id)
        setCustomer(response.data)
        }

        const EditDetails = async  () =>{
            await editCus(customer, _id) 
            navigate('/')
        }


      const OnvalueChange = (e) =>{
        setCustomer({...customer, [e.target.name]:e.target.value})
        }

        
       

    return(
    <Container>
      <Typography variant="h2" >Edit Details</Typography>
      <div className="d-flex ">
        <FormControl className="">
            <InputLabel>First Name</InputLabel>
            <Input  name='Fname' onChange={(e)=> OnvalueChange(e)} value={customer.Fname}/>
        </FormControl>
        <FormControl className="mx-3">
            <InputLabel>Last name</InputLabel>
            <Input  name='Lname' onChange={(e)=> OnvalueChange(e)} value={customer.Lname} />
        </FormControl>
        </div>
        <FormControl className="my-3">
            <InputLabel>Email</InputLabel>
            <Input  name='email' onChange={(e)=> OnvalueChange(e)} value={customer.email} />
        </FormControl>
        <FormControl className="my-3">
            <InputLabel>Phone</InputLabel>
            <Input type="number"  name='phone' max='10' onChange={(e)=> OnvalueChange(e)}  value={customer.phone}   />
        </FormControl>

        <div className="d-flex ">
        <FormControl className="">
            <InputLabel>Check In Date</InputLabel>
            <Input  type="date" name='checkin' onChange={(e)=> OnvalueChange(e)} value={customer.checkin}/>
        </FormControl>
        <FormControl className="mx-3">
            <InputLabel>Check Out Date</InputLabel>
            <Input  type="date" name='checkout' onChange={(e)=> OnvalueChange(e)}  value={customer.checkout} />
        </FormControl>
        </div>

        <FormControl>
            <Button variant="contained" className="d-flex my-3" onClick={() => EditDetails()}>Edit Details</Button>
        </FormControl>
        </Container>
    )
}

export default EditCUstomer;