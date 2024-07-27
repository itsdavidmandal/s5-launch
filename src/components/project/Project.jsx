import React from 'react'
import "./project.css"
import imgpro from "../../assets/erevald.png"

const Project = () => {
  return (
    <div className='container-project'>
      <div className="hr-up-project">
        <hr />

      </div>
      <h4 className='title-projects'>
        what was the toy that i was building ?
      </h4>

      <div className="img-project">
        <img src={imgpro} alt="" />
      </div>

      <div className="img-detail-felx">

        <div className="img-details-text">
          I chose to master the MERN stack for my S5 project because of its versatility and robustness in modern web development.
          <br /><br /> MongoDB offers flexibility with its NoSQL database, while Express.js simplifies backend development.
          <br /><br />React provides a powerful frontend framework for building interactive user interfaces, and Node.js enables scalable server-side applications.
          <br /><br />By mastering the MERN stack, I aim to build dynamic, full-stack web applications that combine seamless functionality with a great user experience, preparing myself for future challenges in the tech industry.
        </div>
      </div>


      {/* <div className="hr-under-project">
        <hr />

      </div> */}

      <div className="project-title-flex">
        <div className="project-title-main">
          <h4>
            MY PROJECTS
          </h4>
        </div>
      </div>

        



    </div>
  )
}

export default Project

