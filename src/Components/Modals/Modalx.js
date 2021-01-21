import React from 'react'
import './modalx.css'
import ModalXX from './ModalXX'

class Modalx extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showxx: false,
        }

        this.showxxModal = this.showxxModal.bind(this)
        this.hidexxModal = this.hidexxModal.bind(this)
    }

    showxxModal = () => {
        this.setState({ showxx: true })
    }

    hidexxModal = () => {
        this.setState({ showxx: false })
    }

    render() {
        const showHideClassName = this.props.showx ? 'modal display-block' : 'modal display-none'
        return (
            <div className={showHideClassName}>
                <section className='modal-main border border-solid shadow-md w-1/2 box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                    <div className='grid place-content-end'>
                        {this.props.children}
                        <button onClick={this.props.handleClosex} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                            X
                        </button>
                    </div>
                    <h1 className='text-gray-100 font-playfair font-bold text-5xl text-center animate-pulse'>Make yout quote</h1>
                    <div className='flex flex-col'>
                        <button
                            onClick={this.showxxModal}
                            class='h-12 w-80 mt-20 mx-auto inline-block text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-300 focus:outline-none'>
                            the different types of websites and their prices
                        </button>
                        <ModalXX showxx={this.state.showxx} handleClosexx={this.hidexxModal} />
                    </div>
                </section>
            </div>
        )
    }
}

export default Modalx
