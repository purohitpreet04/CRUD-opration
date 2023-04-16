import React, { useEffect,useState } from "react";
import {Typography, Table, TableHead, TableCell, TableRow, TableBody, styled , Button} from '@mui/material'
import { allCus } from "../Api/Api";
import { Link } from "react-router-dom";
import '../App.css';


const StyledTable = styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`

const TRow = styled(TableRow)`
background:lightblue;
& > th {
    color:white;
    font-size:20px;
}
`

const Tbody = styled(TableRow)`
& > td {
    font-size:20px;
}
`
const Head = styled(Typography)`
    text-align:center;
`

const Btn = styled(Button)`
margin-left:100px;
`


const Home = ()=>{

    const [customers, setCustomer] = useState([])

    useEffect(()=>{
        getAllCus()
    },[])

    const getAllCus = async () =>{
        let response = await allCus()
        setCustomer(response.data)
    }


    return(

        <>
        
        <Head variant="h2" component="h2" className="m-2" >
                 Hotel Taj 
        </Head>;
        <div className=""> 
        <Btn component={Link} to={'/add'} variant="contained" >Add New Customer</Btn>
        </div>
        <StyledTable>
        <TableHead>
            <TRow>
                <TableCell>Id</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Check IN</TableCell>
                <TableCell>Check Out</TableCell>
                <TableCell></TableCell>
            </TRow>
        </TableHead>
        <TableBody>
        {
            customers.map(cus =>{
                return(
                    
                   <Tbody key={cus._id}>
                    <TableCell>{cus._id}</TableCell>
                    <TableCell>{cus.Fname}</TableCell>
                    <TableCell>{cus.Lname}</TableCell>
                    <TableCell>{cus.email}</TableCell>
                    <TableCell>{cus.phone}</TableCell>
                    <TableCell>{cus.checkin}</TableCell>
                    <TableCell>{cus.checkout}</TableCell>
                    <TableCell>
                        <Button variant="contained" component={Link} to={`/edit/${cus._id}`}>Edit</Button>
                        {/* <Button className="mx-2" variant="contained" color='success'>Checked Out</Button> */}
                    </TableCell>
                    </Tbody>
                )
            })
        }
        </TableBody>
       </StyledTable> 

       </>
    ) 
}

export default Home;