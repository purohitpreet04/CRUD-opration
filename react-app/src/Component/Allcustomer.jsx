import React, { useEffect,useState } from "react";
import {allCus,Deletcus} from '../Api/Api.js'
import { Table, TableHead, TableCell, TableRow, TableBody, styled,Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
width:90%;
margin: 50px auto 0 auto;
border:1 px solid black;
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


const Allcustomer = ()=>{

    const [customers, setCustomer] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getAllCus()
    },[])

    const getAllCus = async () =>{
        let res = await allCus()
        setCustomer(res.data)
    }
    

    const deleteCus = async (_id) =>{
        await Deletcus(_id)
        getAllCus()
        // alert()
        navigate('/all')
    }




    return(
<>

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
            customers.map(user =>{
                return(
                <Tbody key={user._id}>
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.Fname}</TableCell>
                    <TableCell>{user.Lname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.checkin}</TableCell>
                    <TableCell>{user.checkout}</TableCell>
                    <TableCell>
                        <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button className="mx-2" variant="contained" color='success' onClick={()=> deleteCus(user._id)}>Delete</Button>
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

export default Allcustomer;