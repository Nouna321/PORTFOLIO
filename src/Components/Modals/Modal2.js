import React from 'react'
import './model2.css'

const Modal2 = ({ handleClose2, show2, children }) => {
    const showHideClassName = show2 ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showHideClassName}>
            <section className='modal-main border border-solid shadow-md w-1/2 box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                <div className='grid place-content-end'>
                    {children}
                    <button onClick={handleClose2} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
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
export default Modal2
