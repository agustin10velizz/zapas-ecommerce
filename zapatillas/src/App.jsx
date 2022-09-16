import './App.css';
import Navbar from './components/Navbar';
import Zapass from './containers/Zapass';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () =>{
  return (
    <>
    <div>

    <Navbar/>
   <Zapass/>
   <ItemDetailContainer/>
   </div>
    </>
  );
}



export default App;