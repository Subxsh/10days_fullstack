import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    department: {type:String, required:true},
});
const Form=mongoose.model('forms', userSchema);
export default Form;
//git

