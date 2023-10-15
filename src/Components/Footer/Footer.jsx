import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <>
      <div className='fixid-bottom text-center' >


        <div className="layer color ">
        <div className="container p-5 text-white  ">
          <div className="row">
            <div className="col-md-4">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>

            </div>
            <div className="col-md-4 ">
               <h3>AROUND THE WEB</h3>
              <ul className='d-flex justify-content-center ps-0 '>
                <li><i className=' fa-brands  border border-white rounded-circle  fs-2 m-1 p-2 fa-facebook'></i>
                </li>
                <li><i className=' fa-brands  border border-white rounded-circle  fs-3  m-1 p-2 fa-twitter'></i>
                </li>
                <li><i className=' fa-brands  border border-white rounded-circle  fs-3  m-1 p-2 fa-instagram'></i>
                </li>
                <li><i className=' fa-brands  border border-white rounded-circle  fs-3  m-1 p-2 fa-youtube'></i>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        </div>

        <div className=' text-white container-fluied '>
          <p className='nav-color m-0 p-4 '>Copyright © Your Website 2021</p>
        </div>

      </div>
    </>
  )
}
