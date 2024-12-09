const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const loginMid = require('../middleware/loginMid');

const Post = mongoose.model("Post");

router.get("/allPosts", (req,res)=> {
   Post.find()
   .populate("postedBy", "_id name")   //fetch only id and name of the users, with posts
   .then(posts => {
      res.json(posts)
   })
   .catch(err=>{
      console.log(err);
   })
})

router.post("/createpost",loginMid, (req,res)=> {
const{title, body, url} = req.body;
if(!title || !body || !url){
    return res.status(422).json({error: "please add all fields"});
}
// console.log(req.user);
//res.json("ok")
req.user.password = undefined;
const post = new Post({
    title,
    body,
    postedBy: req.user
 })
 post.save().then(result=> {
    res.json({post:result})
 })
 .catch(err => {
    console.log(err);
 })

})

//show all post ceated by a user
router.get("/mypost", loginMid,(req, res) => {
   Post.find({ postedBy: req.user._id })
     .populate("postedBy", "_id name") // Ensure matches the field in the schema
     .then(mypost => {
       res.json({ mypost });
     })
     .catch(err => {
       console.error(err); // Log the error to the console
       res.status(500).json({ error: 'An error occurred while fetching posts' }); // Send a response to the client
     });
 });
 
module.exports = router;