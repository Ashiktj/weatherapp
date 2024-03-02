import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='' className='fs-2 ' >
          <i class="fa-solid fa-cloud-bolt"></i>
            Weather App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header