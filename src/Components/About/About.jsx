import React from 'react'
import './About.css'
import Star from '../NestedComponents/Star/Star'
export default function About() {
  return (
    <>
      <div className="vh-95  color-home d-flex flex-column text-center justify-content-center gap-3 text-white ">
        <Star title={'ABOUT COMPONENT'} color={'white'} />

        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>

            <div className="col-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}
