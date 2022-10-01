import {Link} from 'react-router-dom'
import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return(
        <>
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid" >
      <a className="titulo navbar-brand" href="/">ZAPAS HAEDO
      <img  src="https://cdn-icons-png.flaticon.com/512/5499/5499206.png" alt="" width="40" height="34" className="img-logo d-inline-block align-text-top" ></img>
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="subtitulo collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <Link to="/category/1" className="subtitulo nav-link" aria-current="page" href="vans">Vans</Link>
          <Link to="/category/2" className="subtitulo nav-link" aria-current="page" href="converse">Converse</Link>
          <Link to="/category/3"  className="subtitulo nav-link" aria-current="page" href="adidas" >Adidas</Link>
        </div>
      </div>
    </div>
    <Link to="/cart">< CartWidget  /></Link>
    
    
    </nav>
        
        </>
    )
}

export default Navbar;

