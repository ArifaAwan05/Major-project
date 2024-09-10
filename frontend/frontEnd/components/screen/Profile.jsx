import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
      <div style={{
        display: "flex",
        justifyContent:"space-around",
        margin:"18px 0px",
        borderBottom: "1px solid grey"}}>
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1473773386757-42bbe7288351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
          />
        </div>
        <div>
            <h4>Arifa Awan</h4>
            <div style={{display:"flex", justifyContent:"space-between",width:"108%"}}>
                <h6>13 Posts</h6>
                <h6>40 followers</h6>
                <h6>60 folloing</h6>

            </div>

        </div>
      </div>
      <div className="gallery">
      <img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
<img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
      <img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
      <img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
<img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
      <img className ="item" 
      src="https://images.unsplash.com/photo-1505377059067-e285a7bac49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fHww" />
      </div>
    </div>
  );
};
export default Profile;
