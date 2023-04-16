import React, { useState } from "react";
import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from '@mui/material'
import {AddCus} from '../Api/Api'
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
`
const AddCustomer = () =>{

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

  const OnvalueChange = (e) =>{
    setCustomer({...customer, [e.target.name]:e.target.value})
  }
  
  
  const AddDetails = async ( ) =>{
    const Cus_data = await AddCus(customer);
    console.log('Cus_data => ',Cus_data)
    navigate('/');
  };

    return(
      <Container>
      <Typography variant="h2" >Add Details</Typography>
      <div className="d-flex ">
        <FormControl className="">
            <InputLabel>First Name</InputLabel>
            <Input type='text' name='Fname' onChange={(e)=> OnvalueChange(e)}/>
        </FormControl>
        <FormControl className="mx-3">
            <InputLabel>Last name</InputLabel>
            <Input type='text' name='Lname' onChange={(e)=> OnvalueChange(e)}/>
        </FormControl>
        </div>
        <FormControl className="my-3">
            <InputLabel>Email</InputLabel>
            <Input type='text' name='email' onChange={(e)=> OnvalueChange(e)}/>
        </FormControl>
        <FormControl className="my-3">
            <InputLabel>Phone</InputLabel>
            <Input type="number"  name='phone' max='10' onChange={(e)=> OnvalueChange(e)}/>
        </FormControl>

        <div className="d-flex ">
        <FormControl className="">
            <InputLabel>Check In Date</InputLabel>
            <Input  type="date" name='checkin' onChange={(e)=> OnvalueChange(e)} format=''/>
        </FormControl>
        <FormControl className="mx-3">
            <InputLabel>Check Out Date</InputLabel>
            <Input  type="date" name='checkout' onChange={(e)=> OnvalueChange(e)}/>
        </FormControl>
        </div>

        <FormControl>
            <Button variant="contained" className="d-flex my-3" onClick={() => AddDetails()}>Add Details</Button>
        </FormControl>
        </Container>
    )
}

export default AddCustomer;