import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Accueil from './Accueil'
import reportWebVitals from './reportWebVitals'
import Me from './me'
import Animation from './animation'
import Footer from './footer'

ReactDOM.render(
    <React.StrictMode>
        <Accueil />
        <Me />
        <Animation />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
