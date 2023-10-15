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



  const allImages = useRef(null);//this before document load
  const cont = useRef(null);//this before document load

  let [modal, setModal] = useState(false);
  let [img, setImg] = useState('');

  useEffect(() => {


    //*so i need here to use useref in parent row userref().query selectorAll(.col-md-4.img)
    // *so get all images but here is component so i need to send from card the whole images
    // * this not a problem because you use useeffect the all images will be written instead of card so t3amel akenohm mawgodeen

    // ^ this func must work afte the dom load so put it inside useEffect(here,[]);

    const images = Array.from(allImages.current.querySelectorAll('img'));
    const layouts = Array.from(allImages.current.querySelectorAll('.layout'));
    const contain = cont.current;


    console.log(images);//this show element images
    console.log(layouts);//this show lay out  to get the stands of pic in arr
    console.log(contain);//div gg if clicked will send prop to close

    for (let i = 0; i < images.length; i++) {
      layouts[i].addEventListener('click', (e) => {
        let Index = layouts.indexOf(e.target);
        setModal(true);
        setImg(images[Index].src);
      }
      )

    }

    contain.addEventListener('click', () => {
      setModal(false);
    })
    contain.querySelector('.cont img').addEventListener('click', (e) => {
      e.stopPropagation();
    })

  }, [])





  return (
    <>

      <div className='gg' ref={cont}>
        {modal ? <Open disp={'flex'} url={img} /> : <Open disp={'none'} url={img} />}
      </div>

      <Gap />
      <div className="vh-95  text-center pt-4 mt-5 ">
        <Star title={'PORTOFOLIO COMPONENT'} color={'black'} />

        <div className="gallery container pt-4">
          <div className="row g-4" ref={allImages}>
            {/* <div className="row g-4" > */}
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



  )
}
