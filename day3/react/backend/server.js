import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {connectDB}  from './config/db.js';
import User from './model/user.js';
import Form from './model/form.js';
import dotenv from 'dotenv';
dotenv.config();
const app= express();


connectDB();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())


const method= (req, res, next) => {
    if(req.method === 'DELETE') {
        res.send('Delete method is not allowed');
    } else {
        next();
    }
}
app.use(method); 

app.get('/getform', async(req, res) => {
   const fuser=await Form.find();
   res.json(fuser);
});
app.get('/get', async(req, res) => {
   const user=await User.find();
   res.json(user);
   //try{
    //const user=await User.findById(req.params.id);
   // if(!user) res.json({msg:'User not found'});
   // res.json(user);
 //  } catch(error) {
   // res.send(error)
    //}
})
app.post('/post', async(req, res) => {
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    } catch(error) {
        console.status(401).json(error);
    }
})

app.post('/postform', async(req, res) => {
    try{
        const fnewUser=new Form(req.body)
        await fnewUser.save()
        res.status(201).json(fnewUser)
    } catch(error) {
        res.status(401).json(error);
    }
})
app.put('/put/:id', async(req, res) => { 
    try{
        const update=await User.findByIdAndUpdate(req.params.id, req.body)
        if(!update) res.json({msg:'User not found'});
        res.json({msg:'data updated'})
    } catch(error) {
        res.json(error)
    }
})
app.delete('/delete/:id', async(req, res) => {
    try{
        const del=await User.findByIdAndDelete(req.params.id, req.body)
        if(!del) res.json({msg:'User not found'});
        res.json({msg:'data deleted'})
    } catch(error) {
        res.json(error)
    }
})
app.patch('/patch', (req, res) => {
    res.send('From Patch!');
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
});