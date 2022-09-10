import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
    return(
        <>
<nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="titulo navbar-brand" href="#">ZAPAS HAEDO
      <img  src="https://cdn-icons-png.flaticon.com/512/5499/5499206.png" alt="" width="40" height="34" className="img-logo d-inline-block align-text-top"></img>
</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="subtitulo collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <a className="subtitulo nav-link" aria-current="page" href="#">Vans</a>
          <a className="subtitulo nav-link" aria-current="page" href="#">Converse</a>
          <a className="subtitulo nav-link" aria-current="page" href="#" >Adidas</a>
        </div>
      </div>
    </div>
    < BsCart3  className="carrito"   />
    </nav>
        
        </>
    )
}

export default Navbar;