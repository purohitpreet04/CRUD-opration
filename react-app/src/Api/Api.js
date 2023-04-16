import axios from "axios";

const URL = 'http://localhost:8000';


export const AddCus = async (data)=>{
    try {
        console.log('data => ', data)
        return await axios.post(`${URL}/add`, data)
    } catch (error) {
        console.log('error in adduser', error)
    }
};

export const allCus = async () => {
    try {
        return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('Error while calling allUser', error) 
    }
};

export const getCus = async (_id)=>{
    try {
        console.log(_id)
        return await axios.get(`${URL}/${_id}`)
    } catch (error) {
        console.log('Error while calling getUser api', error)
    }
};

export const editCus = async (customer, _id) =>{

    try {
        return await axios.post(`${URL}/${_id}`,customer)
    } catch (error) {
        console.log('Error while calling getUser api', error)
    }
};

export const Deletcus = async (_id) =>{
    try {
        return await axios.delete(`${URL}/${_id}`)
    } catch (error) {
        console.log('Error while calling DeleteUser api', error)
    }
};