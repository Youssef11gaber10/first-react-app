import React from 'react'
import './Star.css'
export default function Star(props) {
    return (
        <>
            <h3 className='fs-1 fw-bolder' style={{color:props.color}}>{props.title}</h3>
            <div style={{color:props.color}} className='d-flex justify-content-center align-items-center gap-3'>
                <div style={{backgroundColor:props.color}} className='styl' ></div>
                <i className='fa-solid fa-star'></i>
                <div style={{backgroundColor:props.color}} className='styl' ></div>
            </div>
        </>

    )
}
