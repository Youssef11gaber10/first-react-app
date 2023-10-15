import React from 'react'
import './Contact.css'
import Gap from '../NestedComponents/Gap/Gap'
import Star from '../NestedComponents/Star/Star'
export default function Contact() {
  return (
    <>
      <Gap />
      <div className="vh-95 text-center pt-4 mt-4">
        <Star title={'CONTACT SECTION'} color={'black'} />
        <div className="container p-5 mt-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form className='d-flex flex-column gap-3 w-100' action="">


                <input id='name' type="text" className=' form-control form-control border-0 border-bottom py-2 position-relative z-2 ' placeholder='userName' />
                <label htmlFor="name" className='text-start'>userName: </label>

                <input id='age' type="number" className=' form-control form-control border-0 border-bottom py-2 position-relative z-2 ' placeholder='userAge' />
                <label htmlFor="age" className='text-start'>userAge: </label>

                <input id='email' type="email" className=' form-control form-control border-0 border-bottom py-2 position-relative z-2 ' placeholder='userEmail' />
                <label htmlFor="email" className='text-start'>userEmail</label>

                <input id='pass' type="password" className=' form-control form-control border-0 border-bottom py-2 position-relative z-2 ' placeholder='userPassword' />
                <label htmlFor="pass" className='text-start'>userPassword</label>

                <div className='d-flex justify-content-start'>
                  <button className='btn btn-main' type='button'>Send Messages</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
