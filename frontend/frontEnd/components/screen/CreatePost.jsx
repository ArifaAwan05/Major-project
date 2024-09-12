import React from "react";
import { useState } from "react";

const CreatePost = () => {
  const[title, setTitle] = useState("")
  const[body, setBody] = useState("")
  const[image, setImage] = useState("")
  const[url, setUrl]  = useState("")

  const postDetails = () => {
    const data = new FormData()
    data.append("file", image);
    data.append("upload_preset","insta-clone")
    data.append("cloud_name", "dofqcv5ui")
    fetch("https://api.cloudinary.com/v1_1/dofqcv5ui/image/upload", {
      method: "Post",
      body: data
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setUrl(data.url);
      
    })
    .catch((e)=> {
      console.log(e);
    })
  }
  return (
    <div className="card input-filed"
    style={{
        margin:"10px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"}}>
      <input type="text" placeholder="title"
      value={title}
      onChange={(e) => { setTitle(e.target.value) }} />
      <input type="text" placeholder="body" 
      onChange={(e) => { setBody(e.target.value) }}  />
      <div className="file-field input-field">
        <div className="btn blue lighten-1">
          <span>Upload Image</span>
          <input type="file"  onChange={(e)=> { setImage(e.target.files[0])}}/>
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #42a5f5 blue lighten-1"
      onClick={()=> postDetails()}>Submit</button>
    </div>
  );
};
export default CreatePost;
