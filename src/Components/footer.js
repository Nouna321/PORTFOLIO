import React, { Component } from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { GiButterfly } from 'react-icons/gi'

class footer extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className=' flex flex-col  '>
                <div className='border-t-4 border-green-700 mt-80 animate-pulse '></div>
                <div className='flex flex-col mx-auto mt-16'>
                    <GiButterfly size={40} className='text-green-700 mx-auto animate-pulse' />
                    <p className='mt-4 font-mont text-2xl'>
                        © 2021 <em className='font-Cursive mt-8 text-green-700 font-playfair text-2xl animate-pulse'>Z-farasha</em>. All Rights Reserved
                    </p>
                </div>
                <div className=' flex flex-col mx-auto'>
                    <div className='grid grid-cols-3 mt-8'>
                        <a href='https://web.facebook.com/nou.naas.39'>
                            <ImFacebook2 size={30} className='text-gray-900 mr-8 animate-pulse ' />
                        </a>
                        <a href='https://www.instagram.com/nounaass321/'>
                            <SiInstagram size={30} className='text-gray-900 mr-8 animate-pulse' />
                        </a>
                        <a href='https://github.com/Nouna321'>
                            <SiGithub size={30} className='text-gray-900 mr-4 animate-pulse' />
                        </a>
                    </div>
                </div>
                <div className='flex mx-auto'>
                    <p className='mt-8 font-mont text-gray-600 text-3xl text-center'>zaitsadoune@gmail.com</p>
                </div>
            </div>
        )
    }
}
export default footer
