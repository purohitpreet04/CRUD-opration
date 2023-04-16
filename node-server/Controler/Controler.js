import Customer from '../Data-model/Module.js'

export const addCus = async (req,res) =>{
    const cusdata = req.body;
    const newCus = new Customer(cusdata)
    
    try {
        await newCus.save();
        console.log('req.body => ',cusdata)
        res.status(200).json(newCus)
        console.log( 'new data =>',newCus)
    } catch (error) {
        res.status(409).json({message:error.message})
        console.log(error)
    }
};

export const allCus = async (req, res) =>{
    try {
        const customers = await Customer.find()
        // console.log(customers)
        return res.status(200).json(customers)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const getCus = async (req, res) =>{
    try {
        const customer = await Customer.find({_id:req.params._id})

        console.log(customer)
        return res.status(200).json(customer)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}

export const  editUser =  async (req,res) =>{
  
    const customer = req.body;
    const editDetails  = new User(customer)
    
    try {
        await User.updateOne({ _id:req.params._id }, editDetails)    
        res.status(200).json(editDetails);
        // console.log(editDetails)
      } catch (error) {
        res.status(409).json({message:error.message})
    }
  }
  
  
export const deleteUser = async ( req, res ) =>{
    try {
   
        await Customer.deleteOne({ _id:req.params._id })
        return res.status(200).json({message:'Customer deleted.....'})
    } catch (error) {
      res.status(409).json({message:error.message})
      
    }
  }
  