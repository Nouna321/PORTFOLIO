import React, { Component } from 'react'
import { GiButterfly } from 'react-icons/gi'
import Friend from './img/friendlywork.jpg'
import Drink from './img/drinks.jpg'
import Fun from './img/fun.jpg'
import Tool from './img/tools.jpg'

class me extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div>
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
                <div className='ml-12 mr-32'>
                    <h1 className=' text-green-600 font-playfair font-bold text-5xl mt-60 text-center'>Work with me</h1>
                    <div className='flex flex-col mr-52 ml-52 border-t-4 border-green-500 mt-2'></div>
                    <p className='ml-16 font-mont text-xl mt-16 text-gray-600'>
                        I provide a relaxed working environment and opportunity for professional and personal growth. Send your application and come meet me to discover all that
                        Z-faracha can provide you.
                    </p>
                </div>
                <div className='flex flex-row justify-center '>
                    <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110' href='#'>
                        <img className='w-64 mt-20' src={Friend} />
                    </a>
                    <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110' href='#'>
                        <img className='w-64 mt-20' src={Drink} />
                    </a>
                    <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110' href='#'>
                        <img className='w-64 mt-20' src={Fun} />
                    </a>
                    <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110' href='#'>
                        <img className='w-56 mt-20' src={Tool} />
                    </a>
                </div>

                <div className='ml-12 mr-32'>
                    <h1 className=' text-green-600 font-playfair font-bold text-5xl mt-20 text-center'>Job Opportunities</h1>
                    <div className='flex flex-col mr-52 ml-52 border-t-4 border-green-500 mt-6'></div>
                    <div className='grid grid-cols-2 ml-32 mt-32'>
                        <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14  text-white mt-5 border border-transparent px-3 py-7 bg-code bg-center bg-cover font-playfair font-bold text-center text-3xl'>
                            Web Developer
                        </a>
                        <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code2 bg-center bg-cover font-playfair font-bold text-center text-3xl'>
                            Mobile Developer
                        </a>
                        <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code3 bg-center bg-cover mb-4 font-playfair font-bold text-center text-3xl'>
                            FullStack Developer
                        </a>
                        <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code4 bg-center bg-cover mb-4 font-playfair font-bold text-center text-3xl'>
                            Freelance
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default me
