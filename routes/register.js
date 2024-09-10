const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Users = mongoose.model("Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const loginMid = require('../middleware/loginMid');


//SignUp Authorization
router.post("/signup", (req,res)=>{
    // console.log(req.body.name);
    const{name, email, password} = req.body;
    //if email, password and name is empty
    if(!email || !password || !name){
        return res.status(422).json({error:"Please Add All the field"});
    } 
    Users.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
             return res.status(422).json({error: "user Already exist"})
        }
        bcrypt.hash(password,12)
        .then(encrptpass => {
            const user = new Users({
                email,
                password:encrptpass,
                name
              });
              user.save()
              .then(user => {
                res.json({message: "Saved Sucessfully"});
              })
              .catch(err => {
                console.log(err)
            });
        })
  })
    .catch(err => console.log(err));
    //res.json("sucessfully submitted!")
});

// Login Route
router.post("/login",(req,res)=>{
    const{email, password} = req.body;
    if(!email || !password){
        return res.status(402).json({error: "Plesae Provide Credentials"});
    }
    Users.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid Credentials"});
    }
    bcrypt.compare(password, savedUser.password)
    .then(matched => {
        if(matched){
            // res.json({message: "sucessfully Signed"})
            const token = jwt.sign({_id: savedUser._id},process.env.JWT_KEY,
                {
                  expiresIn: "1h"
                });
            const{_id, name, email} = savedUser;
            res.json({token, user:{_id, name, email}})
        }
        else{
            return res.status(422).json({error: "You entered invalid email and Password"});
        }
    })
    })
    .catch(err=> {
        console.log(err);
    })

});

router.get('/secure', loginMid,(req,res)=>{
    res.send("hello")
});

module.exports = router;


