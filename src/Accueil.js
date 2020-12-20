import React, { Component } from 'react'
import papillion from './img/papillion.png'

class Accueil extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='h-screen bg-header bg-center bg-cover'>
                <div className='h-full bg-gray-900 bg-opacity-60 '>
                    <div className='flex flex-row ... justify-between flex flex-col ...'>
                        <div className='flex flex-row ... justify-between'>
                            <div className='flex flex-row ...'>
                                <img className='w-12 ml-10' src={papillion} />
                                <p className='md:font-serif ... mt-8 text-white font-black ...'>nounaZasDev</p>
                            </div>
                            <nav className='flex flex-row ... '>
                                <a className='ml-5 text-white mt-8' href='#'>
                                    About Me
                                </a>
                                <a className='ml-5 text-white mt-8' href='#'>
                                    Work with me
                                </a>
                                <a className='ml-5 text-white mt-8' href='#'>
                                    My projects
                                </a>
                                <a className='ml-5 mr-20 text-white mt-8' href='#'>
                                    Contact me
                                </a>
                            </nav>
                        </div>
                    </div>
                    {/*<div className='flex  '>
                        <p className='text-white font-black ... '>Hi, I'm Zouina AIT SADOUNE</p>
        </div>*/}
                </div>
            </div>
        )
    }
}

export default Accueil
