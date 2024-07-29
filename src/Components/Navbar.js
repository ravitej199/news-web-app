import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed top-0 z-50 w-[100%]">
      <NavLink className="navbar-brand ml-3" to="/">NewsGeek</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" navbar-collapse ml-3" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/"><span className="sr-only">(current)</span>Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/business">business</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/entertainment">entertainment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/general">general</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/health">health</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/science">science</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sports">sports</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/technology">technology</NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
    )
  }
}
