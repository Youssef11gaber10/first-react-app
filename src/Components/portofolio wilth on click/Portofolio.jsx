import React, { useState, useEffect, useRef } from 'react'
import './Portofolio.css'
import Gap from '../NestedComponents/Gap/Gap'
import Star from '../NestedComponents/Star/Star'
import Card from '../NestedComponents/Card/Card'
import Open from '../NestedComponents/Card/Open/Open'

import img1 from '../../images/port1.png';
import img2 from '../../images/port2.png';
import img3 from '../../images/port3.png';

export default function Portofolio() {
  let[modal,setModal]=useState(false);
  let[img,setImg]=useState('');
  
  useEffect(()=>
  {
   //we dosn't need this because onclicke can't work if it clicked and dom is loaded
  },[])


 function openPhoto(e)
  {
    setImg(e.target.closest('div').nextElementSibling.src);
    console.log(e.target.closest('div'));
    setModal(true);
  }
  function closePhoto(e)
  {
    setModal(false)
  }
  function stopParent(e)
  {
    e.stopPropagation()
  }

  return (
    <>
    <>
    {modal ? <Open funcClose={closePhoto} funcStop={stopParent} disp={'flex'} url={img} /> : <Open disp={'none'} url={img} />}
    </>

      <>
        <Gap />
        <div className="vh-95  text-center pt-4 mt-5 ">
          <Star title={'PORTOFOLIO COMPONENT'} color={'black'} />

          <div className="gallery container pt-4">
            <div className="row g-4" >

              <div className="col-md-4">
                <Card func={openPhoto} url={img1} />
              </div>

              <div className="col-md-4">
                <Card  func={openPhoto} url={img2} />
              </div>
              <div className="col-md-4">
                <Card  func={openPhoto} url={img3} />
              </div>
              <div className="col-md-4">
                <Card  func={openPhoto} url={img1} />
              </div>

              <div className="col-md-4">
                <Card  func={openPhoto} url={img2} />
              </div>
              <div className="col-md-4">
                <Card  func={openPhoto} url={img3} />
              </div>

            

            </div>

          </div>
        </div>

      </>
      {/* } */}

    </>

  )
}
