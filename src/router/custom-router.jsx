import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/home/home-page";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer";
import ShopItem from "../pages/shopItem";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/Anasayfa">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/Mağaza" exact element={<ShopItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default CustomRoutes;
