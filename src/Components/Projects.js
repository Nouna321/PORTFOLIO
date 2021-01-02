import React, { Component } from 'react'
import Friend from './img/friendlywork.jpg'
import Drink from './img/drinks.jpg'
import Fun from './img/fun.jpg'
import Tool from './img/tools.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', //
})

class Projects extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div data-aos='zoom-in-up' data-aos-duration='1000'>
                    <div className='ml-12 mr-32'>
                        <h1 className=' text-green-600 font-playfair font-bold text-5xl mt-52 text-center'>My Projects</h1>
                        <div className='flex flex-col mr-52 ml-52 border-t-4 border-green-500 mt-6'></div>
                        <div className='grid grid-cols-2 ml-32 mt-32'>
                            <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14  text-white mt-5 border border-transparent px-3 py-7 bg-code bg-center bg-cover font-playfair font-bold text-center text-3xl'>
                                Web development
                            </a>
                            <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code2 bg-center bg-cover font-playfair font-bold text-center text-3xl'>
                                Mobile development
                            </a>
                            <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code3 bg-center bg-cover mb-4 font-playfair font-bold text-center text-3xl'>
                                Data Science
                            </a>
                            <a className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1  mr-14 text-white mt-5 border border-transparent px-3 py-7 bg-code4 bg-center bg-cover mb-4 font-playfair font-bold text-center text-3xl'>
                                Freelance
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
