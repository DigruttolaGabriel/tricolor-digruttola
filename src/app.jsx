import './app.css';
import ItemListContainer from "./components/containers/item-list/item-list.container";
import ItemDetailsContainer from "./components/containers/item-details/item-details.container";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./components/presentationals/home/home";
import NavBarContainer from "./components/containers/nav-bar/nav-bar.container";

function App() {
  return (
    <BrowserRouter>
        <NavBarContainer />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<ItemListContainer />}/>
            <Route path="/products/:id" element={<ItemDetailsContainer />}/>
            <Route path="/products/category/:id" element={<ItemListContainer />}/>
            <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
