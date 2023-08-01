import React, {useState, useContext} from "react";
import DeveloperListContext from "../utils/DeveloperListContext";
import { IoIosSearch } from "react-icons/io";
import { filterData } from "../utils/Helper";

const DeveloperList = () => {
  const devContext = useContext(DeveloperListContext);
  const [searchtext, setsearchtext] = useState("")
  const [devlist, setDevList] = useState(devContext)
      // State to manage the number of images to display
      const [visibleImages, setVisibleImages] = useState(8); // You can adjust the initial number as per your preference

      // Function to handle "See More" button click
      const handleSeeMore = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 6 ); // You can adjust the number of images to show on each "See More" click
      };
  
      const handleLess = () => {
          setVisibleImages(8); // You can adjust the number of images to show on each "See More" click
        };
  return (
    <>
      <div className="developer-list bg-dark" data-bs-theme="dark">
        <h1 className=" text-center text-light pt-3">
          Our expert developer, data scientist and many more{" "}
        </h1>
        <div className="search-container container d-flex justify-content-center py-2">
        <input
            style={{ width: "25rem" }}
            className="form-control me-0 rounded-start-pill youtube-search shadow-none p-3"
            type="search"
            placeholder="Search Developer, Ai enginner, data scientist etc"
            aria-label="Search"
            value={searchtext}
            onChange={(e)=> setsearchtext(e.target.value)}
          />
          <button className="btn btn-secondary rounded-end-pill" style={{width:"50px"}} onClick={()=> filterData(devContext, searchtext, setDevList)}>
            <IoIosSearch />
          </button>
        </div>
        <div className="container container-developer-list d-flex flex-wrap mt-5">
          <h3 className="text-light text-center w-100">{devlist.length === 0 ? "No Result found 😞 Please search by designation name...." : " "}</h3>
            {
                devlist.slice(0, visibleImages).map((items)=>{
                    const {name, designation, description ,rating, experience} = items
                    return(

                        <div className="card my-2 ms-5 border border-primary" style={{ width: "17rem" }} key={items.id}>
                        <img
                          src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                          className="card-img-top rounded-circle"
                          alt="Developer"
                          style={{width:"100px", height:"100px", margin:"auto"}}
                        />
                        <div className="exp-name my-2 d-flex flex-column">
                           <h6
                            className="card-title fs-6 lh-1 fw-bold text-center"
                            style={{ color: "#CBE4DE",}}
                          >
                            {name}
                          </h6>
                          <span
                              className=" fw-semibold text-center"
                              style={{ fontSize: "0.8rem", color: "#CBE4DE",}}
                            >
                              {designation}
                            </span>
                          </div>
                        <div
                          className="card-body"
                          style={{ backgroundColor: "#2C3333" }}
                        >
                          
                           <div className="exp-rating d-flex justify-content-between">
                           <h5
                              className="fw-semibold"
                              style={{ fontSize: "0.9rem", color: "#CBE4DE" }}
                            >
                              {experience}+ experience
                            </h5>
                            <span className="" style={{ fontSize: "0.9rem", color: "#CBE4DE" }} >{rating}+ ratings</span>
                           </div>
                      
                          <p className="card-text fs-6 my-2" style={{ color: "#CBE4DE" }}>
                           {description}
                          </p>
                          <a href="/" className="btn btn-primary">
                            Hire Me
                          </a>
                        </div>
                      </div>
                    )
                })
            }
        </div>
        <div className="see-more-less-button m-auto d-flex justify-content-center py-3">
        {visibleImages < devContext.length ? <button className="btn btn-outline-light" style={{borderRadius:"25px"}} onClick={handleSeeMore}>See More</button> : <button style={{borderRadius:"25px"}} className="btn btn-outline-light" onClick={handleLess}>See Less</button>}
        </div>
      </div>
    </>
  );
};

export default DeveloperList;
