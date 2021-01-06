import React from 'react'
import './model4.css'

const Modal4 = ({ handleClose4, show4, children }) => {
    const showHideClassName = show4 ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showHideClassName}>
            <section className='modal-main border border-solid shadow-md w-1/2 box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                <div className='grid place-content-end'>
                    {children}
                    <button onClick={handleClose4} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                        X
                    </button>
                </div>
                <div>
                    <p>fjfjgjgjgjgj</p>
                </div>
            </section>
        </div>
    )
}
export default Modal4
