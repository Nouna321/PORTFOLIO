import React, { useState } from 'react'
import { GiButterfly } from 'react-icons/gi'
import Modal from './Modals/Modal'
import Modalx from './Modals/Modalx'
import TextTransition, { presets } from 'react-text-transition'

const TEXTS = ["I'm a web ", 'mobile developer', 'Information system engineer']

const Accueil = () => {
    const [show, setShow] = useState(false)
    const [showx, setShowx] = useState(false)
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        )
    }, [])

    return (
        <div className='h-screen bg-header bg-center bg-cover'>
            <div className='h-full bg-gray-900 bg-opacity-80'>
                <div className='flex flex-row ... justify-between flex flex-col ...'>
                    <div className='flex flex-row ... justify-between'>
                        <div className='flex flex-row ...'>
                            <GiButterfly size={50} className='text-gray-100 ml-8 mt-2' />
                            <p className='font-Cursive mt-8 text-white font-playfair '>Z-faracha</p>
                        </div>
                        <nav className='flex flex-row ... '>
                            <a className='ml-7 text-white mt-8' href='#me'>
                                About Me
                            </a>
                            <a className='ml-7 text-white mt-8' href='#me2'>
                                Work with me
                            </a>
                            <a className='ml-7 text-white mt-8' href='#projects'>
                                My projects
                            </a>
                            <a
                                className='ml-8 mr-20 text-white mt-5 border border-white-200 px-3 py-3 transition ease-out duration-500 hover:bg-grey-100 transform hover:-translate-y-1'
                                onClick={() => {
                                    setShow(true)
                                }}>
                                Contact me
                            </a>
                        </nav>
                    </div>
                </div>
                <div className='flex place-content-center'>
                    <p className='text-white mt-60 font-mont text-3xl'>Hi, I'm Zouina AIT SADOUNE</p>
                </div>
                <div className='flex place-content-center'>
                    <p className='text-white font-mont text-2xl'>
                        <div className='flex mt-8'>
                            <div>
                                <TextTransition text={TEXTS[index % TEXTS.length]} springConfig={presets.wobbly} />
                            </div>
                            <div className='ml-8'>
                                from <span className='text-green-400'>Algeria.</span>
                            </div>{' '}
                        </div>
                    </p>
                </div>
                <div className='flex justify-center'>
                    <button
                        onClick={() => {
                            setShow(true)
                        }}
                        className='mr-16 mt-6 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none'>
                        make your quote
                    </button>
                    <button
                        onClick={() => {
                            setShow(true)
                        }}
                        className=' mt-6 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-transparent border-2 border-white-700 rounded ripple hover:bg-green-400 focus:outline-none'>
                        Contact me
                    </button>
                </div>

                <Modal
                    show={show}
                    handleClose={() => {
                        setShow(false)
                    }}
                />
                <Modalx
                    showx={showx}
                    handleClosex={() => {
                        setShowx(false)
                    }}
                />
            </div>
        </div>
    )
}

export default Accueil
