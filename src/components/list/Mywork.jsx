import React, { useEffect } from "react";
import "./Mywork.css";
import mywork_data from "../../assets/services_data";

const Mywork = () => {
  

  return (
    <div id="work" className="mywork">
      {/* <div className="mywork-title">
        </div> */}
      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div key={work.w_no} className="mywork-item">
            <a
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <div className="title-wala-edit">
                <h2>{work.w_title}</h2>
              </div>
              <p>{work.w_desc}</p>
              <div className="show-project">{/* View Project */}</div>
             
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Mywork;
