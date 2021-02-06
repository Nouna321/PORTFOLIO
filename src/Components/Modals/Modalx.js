import React from 'react'
import './modalx.css'

class Modalx extends React.Component {
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
                        <h1 class='h-12 w-80 mt-20 mx-auto inline-block text-1xl font-medium leading-6 text-center text-green-100 uppercase '>
                            the different types of websites and their prices
                        </h1>
                        <ul className='list-disc mt-12 text-gray-100 mx-auto'>
                            <li>Showcase websites: a range from a hundred euros to 15000 euros </li>
                            <li className='mt-4'>Portal websites: 2 000 to 50 000 euros</li>
                            <li className='mt-4'>E-commerce websites: 5 000 euros to 100 000 euros</li>
                            <li className='mt-4'>Customized websites: will rarely start at less than 8000 euros</li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Modalx
