import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/users/home-page";
import Topbar from "../components/topbar/Topbar";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
     <Topbar/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
