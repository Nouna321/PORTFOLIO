import React, { Component } from 'react'
import { DiReact } from 'react-icons/di'
import { DiJavascript } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import { DiPython } from 'react-icons/di'

class Tools extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='h-80 bg-tools bg-center bg-cover mt-80'>
                <div className='h-full bg-gray-800 bg-opacity-80'>
                    <h1 className='text-gray-100 font-playfair font-bold text-5xl text-center pt-8 animate-pulse'>Tools</h1>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='text-gray-100'>
                            <DiReact size={50} className='text-gray-100 mt-12 ml-12 animate-pulse' /> <div className='ml-6 text-4xl'>{'React'}</div>
                        </div>
                        <div className='text-gray-100'>
                            <DiJavascript size={50} className='text-gray-100 mt-12 ml-14 animate-pulse' />
                            <div className=' text-4xl ml-2'> {'JavaScript'}</div>
                        </div>
                        <div className='text-gray-100'>
                            <SiTailwindcss size={50} className='text-gray-100 mt-12 ml-24 animate-pulse' />
                            <div className='text-4xl ml-12'> {'TailwindCss'}</div>
                        </div>
                        <div className='text-gray-100'>
                            <DiPython size={50} className='text-gray-100 mt-12 ml-32 animate-pulse' />
                            <div className=' text-4xl ml-28'> {'Python'}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tools
