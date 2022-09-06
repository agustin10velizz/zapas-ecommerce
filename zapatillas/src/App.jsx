import './App.css';
import Bienvenido from './components/Bienvenido';
import Navbar from './components/Navbar';
import Zapas from './components/Zapas';


const App = () =>{
  return (
    <>
    <Navbar/>
   <Bienvenido bienvenido="Bienvenido a nuestra pagina" />
    {/*props*/}
    <Zapas nombre="Vans" talles="38, 39, 40, 41" color="Rojo, negro, bordo" />
    <Zapas nombre="Converse" talles=" 39, 40, 41" color="Blanco, rojo, marron, negro, celeste" />
    <Zapas nombre="Adidas" talles=" 39, 40, 41, 42" color="Negro, blanco, gris" />
    </>
  );
}



export default App;
