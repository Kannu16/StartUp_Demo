import React from "react";

const WhyToChoose = () => {
  return (
    <>
      <div className="whytochooseContainer bg-dark mt-2">
        <h1 className="text-center text-light py-5">Why To choose Us?</h1>
        <div className="container whytochooseContainer-inner WTC d-flex justify-content-between">
          <img
            alt="data"
            className="img-fluid rounded whytochooseContainer-inner-img"
            style={{ width: "35%" }}
            src="https://img.freepik.com/free-vector/curiosity-people-concept-illustration_114360-11034.jpg?w=740&t=st=1690928736~exp=1690929336~hmac=47eb84b0e23d0dacd62ab704aca90218b60d837ae51d0e5195e03b16449f3cbf"
          />

          <div className="right" style={{ width: "60%" }}>
            <div className="right-inner border border-primary rounded p-3">
              <p className="text-light fw-semibold">
                Our agency provides consulting, ideas, and resources
                for people working to create social change. We bring the right
                people together to challenge established thinking and drive
                transformation. We work with our clients to build the
                capabilities that enable organizations to achieve sustainable
                advantage.
              </p>
              <ul>
                <li className="my-3" style={{color: "#CBE4DE",}}><span className="fw-semibold">Global Reach</span>: We have vast user base comprising clients and freelancers from all around the world. </li>
                <li className="my-3" style={{color: "#CBE4DE",}}> <span className="fw-semibold">Skill Matching:</span> employs intelligent algorithms that match freelancers with relevant projects based on their skills, experience, and preferences. This feature saves time and increases the likelihood of finding the right opportunities. </li>
                <li className="my-3" style={{color: "#CBE4DE",}}> <span className="fw-semibold"> Secure Payment </span> we offer a secure and reliable payment system, where funds are held in escrow until project milestones are completed. </li>
                <li className="my-3" style={{color: "#CBE4DE",}}> <span className="fw-semibold"> Ratings and Reviews: </span> The platform's rating and review system allows freelancers to build their reputations and gain credibility based on their performance and client feedback. </li>
                <li className="my-3" style={{color: "#CBE4DE",}}>  <span className="fw-semibold"> Support and Assistance: </span> <span>We provide 25/7 customer support to address any issues or queries that freelancers or companies may encounter. </span> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyToChoose;
