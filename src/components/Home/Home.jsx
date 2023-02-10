import React from 'react'
import Slider from '../Slider/Slider'
import './Home.css'
export default function Home() {
  return (
    <div>
        <Slider/>
        <div className="down-scrol">
        </div>
        <h1 className='tag'>Art Information</h1>
        <div class="carousel-container">
        <div class="carousel">
            <div class="slider">
                <div class="slide-content">
                    <h1 class="movie-title ">Art</h1>
                    <p class="movie-des">Art is a diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power, or conceptual ideas.</p>
                </div>
                <img src="https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080__340.jpg" alt=""/>
            </div>
        </div>
    </div>
    </div>
  )
}
