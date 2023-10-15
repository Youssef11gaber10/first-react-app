import React from 'react'
import './Home.css'
import Star from '../NestedComponents/Star/Star'
import imgHome from '../../images/avataaars.svg'
export default function Home() {
  return (
   
      <div className='vh-95 color-home d-flex flex-column text-center justify-content-center gap-4 text-white'>
        <img src={imgHome} className='w-100' height={300} alt="" />
        <Star title={'START FRAMEWORK'} color={'white'}/>
        <p>Graphic Artist - Web Designer - Illustrator</p>

      </div>

  )
}
