import React from 'react'
import './Open.css'
export default function Open(props) {
    return (
        <div onClick={props.funcClose} style={{display:props.disp}} className="cont justify-content-center align-items-center position-fixed vh-100 z-2 ">
            <div>
                <img onClick={props.funcStop} src={props.url} className='w-100' height={300} alt="" />
            </div>
        </div>
    )
}
