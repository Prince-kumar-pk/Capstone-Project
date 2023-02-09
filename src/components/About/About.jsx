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
        <h1>Art Store</h1>
        <div className="disc">An art store is a retail establishment that sells supplies, tools, and materials for artists and creative enthusiasts. Art stores cater to a wide range of customers, from professional artists and students to hobbyists and DIY-enthusiasts. They offer a wide variety of products, including paint, canvas, brushes, pens, paper, and other supplies.</div>
        <div className="btn-load">
        <button className="btnloader">Load More....</button>
      </div>
      </div>
      <div className="img-about">
        <img src="https://cdn.pixabay.com/photo/2016/11/23/00/37/art-1851483_960_720.jpg" alt="" />
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
  I am a Frontend Web Developer  and currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University, Punjab (2020-2024). I am a very passionate and enthusiastic programmer who loves to write code.
  As a highly motivated and experienced web developer, I bring a passion for technology and a commitment to creating intuitive and engaging user experiences. 
  </div>

  <div className="img-profile pt-3 mt-3 ">
    <img  src="https://media.licdn.com/dms/image/D4D03AQEEsMRnr3RdIw/profile-displayphoto-shrink_400_400/0/1673983238034?e=1681344000&v=beta&t=n7HF62S0KjJAhODtiFGuBnevdctTt5APwMGJM-ePbTc" alt="" />
  
  </div>
</div>

    </div>
  )
}
