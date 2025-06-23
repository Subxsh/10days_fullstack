import express from 'express';
import mongoose from 'mongoose';
import {connectDB}  from './config/db.js';
import User from './model/user.js';
const app= express();


connectDB();



app.get('/get', async(req, res) => {
    const user=await User.find();
    res.json(user);
})
app.post('/post', (req, res) => {
    res.send('From Post!');
})
app.put('/put', (req, res) => { 
    res.send('From Put!');
})
app.delete('/delete', (req, res) => {
    res.send('From Delete!');
})
app.patch('/patch', (req, res) => {
    res.send('From Patch!');
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000');
});