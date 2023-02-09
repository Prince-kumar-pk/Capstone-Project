import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
export default function Slider() {
  return (
    <div>

<Carousel className="h-40">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/600x200/?art"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/600x200/?nature"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/600x200/?painting"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
