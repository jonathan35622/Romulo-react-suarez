import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ItemsListContainer from './components/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <ItemsListContainer greeting="COMPRÁ EN NUESTRA TIENDA ONLINE MÁS GRANDE DE LA RED"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
