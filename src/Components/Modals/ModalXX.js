import React from 'react'

const Modal1 = ({ handleClosexx, showxx, children }) => {
    const showHideClassName = showxx ? 'modal display-block' : 'modal display-none'
    return (
        <div className={showHideClassName}>
            <section className='modal-main border border-solid shadow-md w-auto box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                <div className='grid place-content-end'>
                    {children}
                    <button onClick={handleClosexx} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                        X
                    </button>
                </div>
                <div className='flex flex-col'>
                    <button class='h-12 w-80 mt-20 mx-auto inline-block text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-300 focus:outline-none'>
                        One page sites
                    </button>

                    <button class='h-12 w-80 mt-20 mx-auto inline-block text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-300 focus:outline-none'>
                        One page sites
                    </button>

                    <button class='h-12 w-80 mt-20 mx-auto inline-block text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-300 focus:outline-none'>
                        One page sites
                    </button>
                </div>
            </section>
        </div>
    )
}
export default Modal1
