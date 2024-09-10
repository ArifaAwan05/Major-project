import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Arifa</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="card-content">
        <i class="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="comment" />
        </div>
      </div>
      
      <div className="card home-card">
        <h5>Arifa</h5>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>this is amazing post</p>
          <input type="text" placeholder="comment" />
        </div>
      </div>

    </div>
  );
};
export default Home;
