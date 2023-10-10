import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/home-page";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
import Shop from "../pages/shop";
import Cart from "../pages/cart";
import WishList from "../pages/wishList";
import Checkout from "../pages/checkout";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/Anasayfa">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/Mağaza" exact element={<Shop />} />
        <Route path="/Sepet" exact element={<Cart />} />
        <Route path="/Favoriler" exact element={<WishList />} />
        <Route path="/Ödemeler" exact element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default CustomRoutes;
