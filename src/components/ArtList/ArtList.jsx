import React from 'react'
import './ArtList.css'
import Data from '../Detaildata/detaildata'
export default function ArtList() {
  return (
    <>
    <span class="tag">Our LookOut</span>
<h1>Art List to Buy </h1>
<hr />
    <div className="container">

      {Data.map((item) => {
        return(
          <div className="wraper-content">
          <div className="img">
            <img src= {item.img} alt=""  />
          </div>
          <div className="title">
            {item.title}
          </div>
          <div className="disc">{item.discription}</div>
          <div className="price">₹ {item.price}</div>
        </div>
        )
      })}


    </div>

    </>
  )
}
