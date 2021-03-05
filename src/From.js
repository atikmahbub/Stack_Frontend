import React from 'react'
import logo from './images/logo.png'

function From() {
    return (
        <>

        <div className="form-div">
        <div>
            <img src={logo} class="logo-image"/>
        </div>
        <div className="form-wrapper">
            <div className="form-container">
                <div className="title">Submit <br></br> & <br></br>View The Plans!</div>
            </div>
            <form>
                <label>Name</label>
                <input type="text" className="form-control"/>
                <label>Email</label>
                <input type="text" className="form-control"/>
                <label>Phone Number</label>
                <input type="text" className="form-control"/>
                <button type="submit" class="outline purple-white">Submit</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default From
