import React from 'react';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,

  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
<div className="container">

<h1 className= "text-primary">Contact </h1> 
<h2>Leave Your message here</h2>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email </label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email Id"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-outline-secondary text-primary">Send</button>
</div>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            // style={{ backgroundColor: '#3b5998' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            // style={{ backgroundColor: '#55acee' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            // style={{ backgroundColor: '#dd4b39' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1 bg-danger'
            // style={{ backgroundColor: '#ac2bac' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            // style={{ backgroundColor: '#0082ca' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1 bg-dark'
            // style={{ backgroundColor: '#333333' }}
            href='#/'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center p-3  text-primary bg-secondary"
      // style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        ?? 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         Art Store
        </a>
      </div>
    </MDBFooter>
  );
}