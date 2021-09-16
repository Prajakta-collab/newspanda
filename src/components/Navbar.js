import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsPanda</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Politics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>
         
        )
    }
}

export default Navbar
