import React, { Component } from 'react'
import papillion from './img/papillion.png'
import { GiButterfly } from 'react-icons/gi'

class Accueil extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='h-screen bg-header bg-center bg-cover'>
                <div className='h-full bg-gray-900 bg-opacity-80 '>
                    <div className='flex flex-row ... justify-between flex flex-col ...'>
                        <div className='flex flex-row ... justify-between'>
                            <div className='flex flex-row ...'>
                                <GiButterfly size={50} className='text-gray-100 ml-8 mt-2' />
                                <p className='font-Cursive mt-8 text-white font-playfair '>Z-faracha</p>
                            </div>
                            <nav className='flex flex-row ... '>
                                <a className='ml-7 text-white mt-8' href='#'>
                                    About Me
                                </a>
                                <a className='ml-7 text-white mt-8' href='#'>
                                    Work with me
                                </a>
                                <a className='ml-7 text-white mt-8' href='#'>
                                    My projects
                                </a>
                                <a className='ml-8 mr-20 text-white mt-5 border border-white-200 px-3 py-3' href='#'>
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
                            I'm a web / mobile developer from <span className='text-green-400'>Algeria.</span>
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <button class='mr-16 mt-6 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-800 focus:outline-none'>
                            make your quote
                        </button>
                        <button class=' mt-6 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-transparent border-2 border-white-700 rounded ripple hover:bg-green-400 focus:outline-none'>
                            Contact me
                        </button>
                    </div>
                </div>
                {/* presentation */}
                <div className=''>
                    <GiButterfly size={80} className='text-green-500 mx-auto mt-12' />
                </div>
                <div className='flex flex-col mr-52 ml-52 border-t-4 border-green-500 mt-12'>
                    <h1 className='text-center text-green-600 font-playfair font-bold text-5xl mt-12'>About me</h1>
                    <p className='text-center font-mont text-xl mt-16 text-gray-600'>
                        Computer Science is huge world, I started to love this world after long research and studies, my first lines of code were in 2nd year at university, then I
                        continued my research in others sectors such as security, networks, ...
                    </p>
                    <p className='text-center font-mont text-xl mt-6 text-gray-600'>
                        Who I am ? I've got my bachelor's degree in Mathematics field in 2016, I went to Mouloud Memmari University in TIZI OUZOU to continue my studies in Computer
                        Science, I finish this year with a degree in Information Systems Engineering
                    </p>
                </div>
            </div>
        )
    }
}

export default Accueil
