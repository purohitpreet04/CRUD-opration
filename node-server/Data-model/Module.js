import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
    {
        Fname:{type:String, require:true},
        Lname:{type:String, require:true},
        email:{type:String, require:true},
        phone:{type:Number, require:true},
        checkin:{type:Date},
        checkout:{type:Date}
    }
);

const Customer = mongoose.model('customer', customerSchema);

export default Customer;