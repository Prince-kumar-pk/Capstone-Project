/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Location.css'
export default function Location() {
  return (
    <div>
      <hr />
      <h1>Find Me</h1>
      <hr />
      <div className="container-wrap">
      <div className="location-details">
        <span className="tag">Art store Location</span>
        <div className="heading">Find Me Here  <span className="arrow">👉</span>  </div>
      
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726564801243!2d75.70295481495978!3d31.255991981457917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1675625962943!5m2!1sen!2sin" 
      width="600" 
      height="100%" 
      style= {{border : "0" }}
      allowfullscreen="" 
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
    </div>
  )
}
