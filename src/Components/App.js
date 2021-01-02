import React, { Component } from 'react'
import './App.css'
import Accueil from './Accueil'
import Me from './me'
import Tools from './Tools'
import Projects from './Projects'
import Footer from './footer'

class App extends Component {
    render() {
        return (
            <div>
                <Accueil />
                <Me />
                <Tools />
                <Projects />
                <Footer />
            </div>
        )
    }
}

export default App
