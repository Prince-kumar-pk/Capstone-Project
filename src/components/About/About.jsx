import React from 'react'
import './About.css'
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <hr />
      <br />
    <div className="container-wraper">
      <div className="details">
        <span className="tag">Art store Gallery</span>
        <h1>Heading</h1>
        <div className="disc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat neque harum minima repellendus. Distinctio eligendi in facere consequuntur! Voluptatum!</div>
        <div className="btn-load">
        <button className="btnloader">Load More....</button>
      </div>
      </div>
      <div className="img-about">
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
      </div>
    </div>


{/* section 2 */}

<div className='team'>

<h5 className="tag">Give Best Support</h5>
<h2>Our Team</h2>
</div>

<div className="container  d-flex flex-row justify-content-evenly align-items-center flex-wrap flex-fill ">

  <div className="profile-detail">
  <h1>Prince Kumar</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aut sunt delectus laudantium laborum laboriosam quaerat harum quae quidem itaque, autem ratione accusamus. Quidem consequatur neque, unde dicta repudiandae iste sequi cumque, iure veniam magnam ratione! Incidunt perspiciatis molestiae ipsum.
  </div>

  <div className="img-profile pt-3 mt-3 ">
    <img src="https://media.licdn.com/dms/image/D4D03AQEEsMRnr3RdIw/profile-displayphoto-shrink_400_400/0/1673983238034?e=1681344000&v=beta&t=n7HF62S0KjJAhODtiFGuBnevdctTt5APwMGJM-ePbTc" alt="" />
  
  </div>
</div>

    </div>
  )
}
