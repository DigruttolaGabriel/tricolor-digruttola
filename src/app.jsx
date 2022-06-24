import './app.css';
import ItemListContainer from "./components/containers/item-list/item-list.container";
import ItemDetailsContainer from "./components/containers/item-details/item-details.container";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/presentationals/home/home";
import NavBarContainer from "./components/containers/nav-bar/nav-bar.container";
import {CartContextProvider} from "./contexts/cart/cart.context";
import CartContainer from "./components/containers/cart/cart.container";

function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
            <NavBarContainer />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/cart" element={<CartContainer />}/>
                <Route path="/products" element={<ItemListContainer />}/>
                <Route path="/product/:id" element={<ItemDetailsContainer />}/>
                <Route path="/products/category/:id" element={<ItemListContainer />}/>
                <Route path="/*" element={<Navigate to="/" />}/>
            </Routes>
        </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
