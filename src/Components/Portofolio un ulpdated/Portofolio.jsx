import React, { useState, useEffect, useRef } from 'react'
import './Portofolio.css'
import Gap from '../NestedComponents/Gap/Gap'
import Star from '../NestedComponents/Star/Star'
import Card from '../NestedComponents/Card/Card'

import img1 from '../../images/port1.png';
import img2 from '../../images/port2.png';
import img3 from '../../images/port3.png';

export default function Portofolio() {
  // const allImages = useRef(null);//this before document load
  // const cont = useRef(null);//this before document load
  // let { modal, setModal } = useState(true);

  // useEffect(() => {


  //   //*so i need here to use useref in parent row userref().query selectorAll(.col-md-4.img)
  //   // *so get all images but here is component so i need to send from card the whole images
  //   // * this not a problem because you use useeffect the all images will be written instead of card so t3amel akenohm mawgodeen

  //   // ^ this func must work afte the dom load so put it inside useEffect(here,[]);

  //   function action(e) {
  //     let Index = layouts.indexOf(e.target);
  //     let con = cont.current;
  //     console.log(con);

  //   }

  //   const images = Array.from(allImages.current.querySelectorAll('img'));
  //   const layouts = Array.from(allImages.current.querySelectorAll('.layout'));
  //   console.log(images);//this show element images
  //   console.log(layouts);//this show element images
  //   for (let i = 0; i < images.length; i++) {
  //     layouts[i].addEventListener('click', (e) => {
  //       action(e);
  //     }
  //     )

  //   }

  // }, [])

  return (
    <>

      {/* {modal? <>
        <div>akldjfakl;df;jasfkla</div>
        <img ref={cont} src='./images/port1.png' alt="" />
      </> :  */}
      <>
        <Gap />
        <div className="vh-95  text-center pt-4 mt-5 ">
          <Star title={'PORTOFOLIO COMPONENT'} color={'black'} />

          <div className="gallery container pt-4">
            {/* <div className="row g-4" ref={allImages}> */}
            <div className="row g-4" >
              <div className="col-md-4">
                <Card url={img1} />
              </div>

              <div className="col-md-4">
                <Card url={img2} />
              </div>

              <div className="col-md-4">
                <Card url={img3} />
              </div>
             
              <div className="col-md-4">
                <Card url={img1} />
              </div>

              <div className="col-md-4">
                <Card url={img2} />
              </div>

              <div className="col-md-4">
                <Card url={img3} />
              </div>
             
            </div>

          </div>
        </div>

      </>
      {/* } */}

    </>

  )
}
