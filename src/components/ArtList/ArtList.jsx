import React from 'react'
// import './ArtList.css'
import Data from '../Detaildata/detaildata'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoap } from '@fortawesome/free-solid-svg-icons';

export default function ArtList() {
  return (
    <>
    <span class="tag">Our LookOut</span>
<h1>Art List to Buy </h1>
<hr />

    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap flex-fill ">

      {Data.map((item) => {
        return(
          <Card style={{ width: '18rem' }}  className=" mx-3 mr-2 mb-3">
          <Card.Img variant="top" src={item.img}/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.discription}
            </Card.Text>
            <Button variant="primary">₹ {item.price} <FontAwesomeIcon icon={faSoap}/></Button>
          </Card.Body>
        </Card>
        )
      })}

    </div>

<h1>More Arts</h1>
      
    </>
  )
}
