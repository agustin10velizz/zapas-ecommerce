import './App.css';

function App() {
  return (
    
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="titulo navbar-brand">Zapas Haedo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          <a className="subtitulo nav-link " aria-current="page">Vans</a>
          <a className="subtitulo nav-link" aria-current="page" >Converse</a>
          <a className="subtitulo nav-link" aria-current="page" >Adidas</a>
         
        </div>
      </div>
    </div>
  </nav>
  );
}

export default App;