import React,{useState,useEffect,useRef} from 'react'
import './Card.css'

 export default function Card(props) {
    // let Gg=()=>
    // {
        //so how to send the element to portofolio
        // dosn't need but ask for another usage
    // }
    return (
        <>
            <div className="cont position-relative ">

                <div  onClick={props.func} className="layout rounded-3 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>

                <img src={props.url} className='w-100  rounded-3' alt="" />
                
            </div>
        </>
    )
}


// export {Gg,Card} can't export smth inside smth
// export {Card}