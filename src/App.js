import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Category from "./pages/Category/Category";
import Home from "./pages/home/Home";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Product from "./pages/product/Product";
import Checkout from "./pages/checkout/Checkout";
import CartProvider from "./context/cartContext";
import ProductsProvider, {
  Context as ProductsContext,
} from "./context/productContext";
import Sidebar from "./components/Sidebar/Sidebar";
import Notfound from "./pages/Notfound/Notfound";
import Footer from "./components/Footer/Footer";
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { addProducts } = useContext(ProductsContext);
  useEffect(() => {
    addProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header setShow={setShowSidebar} show={showSidebar} />
        <Sidebar setShow={setShowSidebar} show={showSidebar} />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/headphones"
              element={<Category category="headphones" />}
            />
            <Route
              path="/category/earphones"
              element={<Category category="earphones" />}
            />
            <Route
              path="/category/speakers"
              element={<Category category="speakers" />}
            />
            <Route path="/category/:category/:name" element={<Product />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </ScrollToTop>
        <Footer />
        <Cart />
      </BrowserRouter>
    </div>
  );
};

const AppWrapper = () => (
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
export default AppWrapper;
