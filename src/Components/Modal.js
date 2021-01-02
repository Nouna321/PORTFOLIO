import React from 'react'

export default function Modal(props) {
    return (
        <div
            className='border border-solid shadow-md w-screen box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500'
            style={{
                transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.visible ? '1' : '0',
                display: props.visible ? 'block' : 'none',
            }}>
            <div className='grid place-content-end'>
                <button onClick={props.cache} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                    X
                </button>
            </div>
            <h1 className='text-gray-100 font-playfair font-bold text-5xl text-center animate-pulse'>Contact me</h1>
            <form className='flex flex-col'>
                <label className='mt-12'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>First name</span>
                    <input className='container rounded-lg h-9 mt-2' type='text' name='fname' placeholder='  AITSAD' />
                </label>
                <label className='mt-4'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>Last name</span>
                    <input className='container rounded-lg h-9 mt-2' type='text' name='lname' placeholder=' John' />
                </label>
                <label className='mt-4'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>E-mail adress</span>
                    <input className='container rounded-lg h-9 mt-2' type='email' name='email' placeholder=' john@example.com' />
                </label>
                <label className='mt-4'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>Title of your project</span>
                    <input className='container rounded-lg h-9 mt-2' type='text' name='project' placeholder=' creation of an e-commerce site' />
                </label>
                <label className='mt-4'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>Budget</span>
                    <input className='container rounded-lg h-9 mt-2' type='text' name='budget' placeholder=' $10,000' />
                </label>

                <label className='mt-4'>
                    <span className='text-gray-100 font-playfair font-bold text-2xl'>Express yourself</span>
                    <textarea className='container rounded-lg mt-2' name='express' rows='3' placeholder=' Enter some long form content.'></textarea>
                </label>
                <div className='grid place-content-end mt-4'>
                    <button class=' w-32 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-100 focus:outline-none'>
                        Contact
                    </button>
                </div>
            </form>
        </div>
    )
}
