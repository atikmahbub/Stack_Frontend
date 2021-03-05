import React from 'react'
import logo from './images/logo.png'

function Header() {
    return (
        <div className="row header">
            <img src={logo} className="logo-image img-responsive"/>
            <div className="plan-header">
                    Welcome to StackSave<spna className="subtitle">Innovative Digital Chit agent</spna>
            </div>  
        </div>
    )
}

export default Header
