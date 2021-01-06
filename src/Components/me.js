import React, { Component } from 'react'
import { GiButterfly } from 'react-icons/gi'
import Friend from './img/friendlywork.jpg'
import Drink from './img/drinks.jpg'
import Fun from './img/fun.jpg'
import Tool from './img/tools.jpg'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
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

class me extends Component {
    constructor() {
        super()
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
        }
        this.showModal1 = this.showModal1.bind(this)
        this.hideModal1 = this.hideModal1.bind(this)

        this.showModal2 = this.showModal2.bind(this)
        this.hideModal2 = this.hideModal2.bind(this)

        this.showModal3 = this.showModal3.bind(this)
        this.hideModal3 = this.hideModal3.bind(this)

        this.showModal4 = this.showModal4.bind(this)
        this.hideModal4 = this.hideModal4.bind(this)
    }

    showModal1 = () => {
        this.setState({ show1: true })
    }

    hideModal1 = () => {
        this.setState({ show1: false })
    }

    showModal2 = () => {
        this.setState({ show2: true })
    }

    hideModal2 = () => {
        this.setState({ show2: false })
    }

    showModal3 = () => {
        this.setState({ show3: true })
    }

    hideModal3 = () => {
        this.setState({ show3: false })
    }

    showModal4 = () => {
        this.setState({ show4: true })
    }

    hideModal4 = () => {
        this.setState({ show4: false })
    }

    render() {
        return (
            <div id='me'>
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
                <div id='me2'>
                    <div className='ml-12 mr-32'>
                        <h1 className=' text-green-600 font-playfair font-bold text-5xl mt-60 text-center'>Work with me</h1>
                        <div className='flex flex-col mr-52 ml-52 border-t-4 border-green-500 mt-2'></div>
                        <p className='ml-16 font-mont text-xl mt-16 text-gray-600'>
                            Work with me with confidence thanks to my experience and my projects already realized, moreover you can visualize them and see my achievements, and
                            without forgetting that I am a person open to the world and I have a very wide network which allows to advance very quickly especially in my field.
                        </p>
                    </div>
                    <div data-aos='zoom-in-up' data-aos-duration='1000'>
                        <div className='flex flex-row justify-center '>
                            <a onClick={this.showModal1} className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110'>
                                <img className='w-64 mt-20' src={Friend} />
                            </a>

                            <a onClick={this.showModal2} className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110'>
                                <img className='w-64 mt-20' src={Drink} />
                            </a>

                            <a onClick={this.showModal3} className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110'>
                                <img className='w-64 mt-20' src={Fun} />
                            </a>

                            <a onClick={this.showModal4} className='transition duration-500 ease-in-out hover:bg-grey-100 transform hover:-translate-y-1 hover:scale-110'>
                                <img className='w-56 mt-20' src={Tool} />
                            </a>
                            <Modal1 show1={this.state.show1} handleClose1={this.hideModal1} />
                            <Modal2 show2={this.state.show2} handleClose2={this.hideModal2} />
                            <Modal3 show3={this.state.show3} handleClose3={this.hideModal3} />
                            <Modal4 show4={this.state.show4} handleClose4={this.hideModal4} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default me
