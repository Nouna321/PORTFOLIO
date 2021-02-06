import React from 'react'
import './modal.css'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            title: '',
            expressyourself: '',
        }
    }

    onFirstNameChange = (event) => {
        this.setState({ firstname: event.target.value })
    }

    onLastNameChange = (event) => {
        this.setState({ lastname: event.target.value })
    }

    onMailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    onExpYourSelfChange = (event) => {
        this.setState({ expressyourself: event.target.value })
    }

    onSubmitContact = () => {
        //true
        fetch('http://localhost:3001/Modal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                title: this.state.title,
                expressyourself: this.state.expressyourself,
            }),
        }).then((response) => response.json())
        // .then(response => {
        //     //false
        // })
    }

    render() {
        const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none'
        return (
            <div className={showHideClassName}>
                <section className='modal-main border border-solid shadow-md w-1/2 box-border p-16 transition duration-500 ease-in-out transform mx-auto bg-green-500 '>
                    <div className='grid place-content-end'>
                        {this.props.children}
                        <button onClick={this.props.handleClose} className='text-gray-100 bg-transparent border-2 border-green-100 rounded w-8'>
                            X
                        </button>
                    </div>
                    <h1 className='text-gray-100 font-playfair font-bold text-5xl text-center animate-pulse'>Contact me</h1>
                    <div className='flex flex-col'>
                        <label className='mt-12'>
                            <span className='text-gray-100 font-playfair font-bold text-2xl'>First name</span>
                            <input onChange={this.onFirstNameChange} className='container rounded-lg h-9 mt-2' type='text' name='fname' placeholder='  AITSAD' />
                        </label>
                        <label className='mt-4'>
                            <span className='text-gray-100 font-playfair font-bold text-2xl'>Last name</span>
                            <input onChange={this.onLastNameChange} className='container rounded-lg h-9 mt-2' type='text' name='lname' placeholder=' John' />
                        </label>
                        <label className='mt-4'>
                            <span className='text-gray-100 font-playfair font-bold text-2xl'>E-mail adress</span>
                            <input onChange={this.onMailChange} className='container rounded-lg h-9 mt-2' type='email' name='email' placeholder=' john@example.com' />
                        </label>
                        <label className='mt-4'>
                            <span className='text-gray-100 font-playfair font-bold text-2xl'>Title of your project</span>
                            <input
                                onChange={this.onTitleChange}
                                className='container rounded-lg h-9 mt-2'
                                type='text'
                                name='project'
                                placeholder=' creation of an e-commerce site'
                            />
                        </label>
                        <label className='mt-4'>
                            <span className='text-gray-100 font-playfair font-bold text-2xl'>Express yourself</span>
                            <textarea
                                onChange={this.onExpYourSelfChange}
                                className='container rounded-lg mt-2'
                                name='express'
                                rows='3'
                                placeholder=' Enter some long form content.'></textarea>
                        </label>
                        <div className='grid place-content-end mt-4'>
                            <button
                                onClick={this.onSubmitContact}
                                class=' w-32 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-100 uppercase transition bg-transparent border-2 border-green-100 rounded ripple hover:bg-green-100 focus:outline-none'>
                                Contact
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Modal
