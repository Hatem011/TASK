import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
<nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">Swvl</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
        {props.userData?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to='home'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='daily'>Daily</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='travel'>Travel</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link"to='bussiness'>Bussiness</Link>
          </li>
        </ul>:""}
            <ul className="ul navbar-nav ms-auto mt-2 mt-lg-0"> 
            {
            props.userData?<li className="nav-item">
                   <a className="nav-link cursor-pointer" onClick={props.logout}>Logout</a>
               </li>
               :
               <>
                <li className="nav-item">
                   <Link className="nav-link" to="login">Login</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="register">Register</Link>
               </li>
               </>
               }
           </ul>
            </div>
           
        </div>
  
</nav>

    </div>
  )
}
