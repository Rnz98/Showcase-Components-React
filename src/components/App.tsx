import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Counter from "./Counter";
import FilterComponent from "./FilterComponent";
import ShoppingCart from "./Shopping-cart";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/pokemon" element={<FilterComponent/>}/>
      <Route path="/shop" element={<ShoppingCart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;