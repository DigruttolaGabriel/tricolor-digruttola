import './App.css';
import NavBar from "./components/presentationals/NavBar/NavBar"
import ItemListContainer from "./components/containers/ItemListContainer/ItemListContainer";
import ItemDetailsContainer from "./components/containers/item-details/item-details.container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer welcomeMessage="Bienvenido al carrito"/>
      <ItemDetailsContainer />
    </div>
  );
}

export default App;
