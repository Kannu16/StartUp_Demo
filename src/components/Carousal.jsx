import React from "react";
import { IoIosSearch } from "react-icons/io";

const Carousal = () => {

  return (
    <div className="carousal-container p-4" style={{ marginTop: "50px", }}>
      <div className="container carousal-container-box-width d-flex justify-content-between">
      <div className="left d-flex flex-column justify-content-center">
        <h1 className="fs-1" style={{color:"#FBEBD9"}}>Find & Hire Expert Freelancers</h1>
        <p className="fs-6" style={{color:"#FBEBD9"}}>
          Work with the best freelance talent from around the world on our <br/>
          secure, flexible and cost-effective platform.
        </p>
        <div className="d-flex form-and-post-job my-4">
         <div className="div d-flex">
         <input
            style={{ width: "25rem", borderRadius:"0px", borderTopLeftRadius:"5px", borderEndStartRadius:"5px"}}
            className="form-control me-0 youtube-search shadow-none p-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-secondary rounded-end-pill" style={{width:"50px"}}>
            <IoIosSearch />
          </button>
         </div>
          <h5 className="text-light mx-4 mt-3">Or</h5>
          <button className="btn btn-primary">Post a job</button>
        </div>
        <div className="serch-idea d-flex">
        <button type="button" className="btn btn-outline-light ms-1 btn-sm">Data Scientist</button>
        <button type="button" className="btn btn-outline-light ms-1 btn-sm">Developer</button>
        <button type="button" className="btn btn-outline-light ms-1 btn-sm">Cloud Scientist</button>
        <button type="button" className="btn btn-outline-light ms-1 btn-sm">DevOps Engineer</button>
        <button type="button" className="btn btn-outline-light ms-1 btn-sm">Backend Developer</button>
        </div>
      </div>
      <div className="right carousal-container-right">
        <img src="https://res.cloudinary.com/gurucom/image/upload/w_450,f_auto/static/homepage/bannerguy.png" alt="logo" />
      </div>
      </div>
    </div>
  );
};

export default Carousal;
