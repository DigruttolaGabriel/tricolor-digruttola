import './app.css';
import NavBar from "./components/presentationals/nav-bar/nav-bar"
import ItemListContainer from "./components/containers/item-list/item-list.container";
import ItemDetailsContainer from "./components/containers/item-details/item-details.container";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/products" element={<ItemListContainer welcomeMessage="Bienvenido al carrito"/>}/>
            <Route path="/products/id" element={<ItemDetailsContainer />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
