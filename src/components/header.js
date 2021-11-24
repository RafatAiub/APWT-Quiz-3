import React from 'react'
import Navbar from './Navbar'

function header() {
    return (
<header id="header" className="fixed-top header-transparent">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">Baker</a></h1>
      
      <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <Navbar/>

    </div>
</header>
    )
}

export default header
