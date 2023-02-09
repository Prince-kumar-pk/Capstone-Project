import React from 'react'
import './Cart.css'
export default function Cart({cart}) {
  return (
    <div>
      <h1>Cart</h1>

      <div class="container-fluid">
    <div class="row align-items-start">
      <div class="col-12 col-sm-8 items">

      {cart.map((item) => {
        return(
          <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img class="w-100" src= {item.img} alt=""/>
          </div>
          <div class="col-5 mb-2">
            <h6 class="">{item.title}</h6>
            
            <p class="pl-1 mb-0">{item.discription}</p>
          </div>
          <div class="col-2"><button>  -</button>
            <span class="cartItemQuantity p-1 text-center"> {item.quantity}</span> <button>+</button>
          </div> 
          <div class="col-2">   
            <span id="cartItem1Price">{item.price}</span>
          </div>
         
        </div>
        )
      })} 
      
        <br />
        <br />


        <hr/>
  


      </div>
      <div class="col-12 col-sm-4 p-3 proceed form">
        <div class="row m-0">
          <div class="col-sm-8 p-0">
            <h6>Subtotal</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="subtotal">$132.00</p>
          </div>
        </div>
        <div class="row m-0">
          <div class="col-sm-8 p-0 ">
            <h6>Tax</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="tax">$6.40</p>
          </div>
        </div>
        <hr/>
        <div class="row mx-0 mb-2">
          <div class="col-sm-8 p-0 d-inline">
            <h5>Total</h5>
          </div>
          <div class="col-sm-4 p-0">
            <p id="total">$138.40</p>
          </div>
        </div>
        <a href="#/"><button id="btn-checkout" class="shopnow"><span>Checkout</span></button></a>
      </div>
    </div>
  </div>
  </div>
      
  
  )
}
