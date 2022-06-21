import './app.css';
import ItemListContainer from "./components/containers/item-list/item-list.container";
import ItemDetailsContainer from "./components/containers/item-details/item-details.container";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/presentationals/home/home";
import NavBarContainer from "./components/containers/nav-bar/nav-bar.container";
import Cart from "./components/presentationals/cart/cart";

function App() {
  return (
    <BrowserRouter>
        <NavBarContainer />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/products" element={<ItemListContainer />}/>
            <Route path="/product/:id" element={<ItemDetailsContainer />}/>
            <Route path="/products/category/:id" element={<ItemListContainer />}/>
            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
