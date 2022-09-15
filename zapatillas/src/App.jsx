import './App.css';
import Bienvenido from './components/Bienvenido';
import Navbar from './components/Navbar';
import Zapass from './containers/Zapass';


const App = () =>{
  return (
    <>
    
    <Navbar/>
   <Bienvenido bienvenido="Bienvenido a nuestra pagina" />
   <Zapass/>
    </>
  );
}



export default App;