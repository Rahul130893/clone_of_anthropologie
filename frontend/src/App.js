
import './App.css';
import { Home } from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import { Cloths } from "./pages/Cloths"
import { Shoes } from "./pages/Shoes"
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp"
import { Accessories } from "./pages/Accessories"
import { Cart } from "./pages/Cart"
import {Product} from "./pages/Product"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path="/cloths/:_id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
      
      </Routes>
    </div>
  );
}

export default App;
