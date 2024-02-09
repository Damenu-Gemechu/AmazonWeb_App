import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import Results from "./pages/Results/Results";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/category/:categoryName" element={<Results/>} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routering;
