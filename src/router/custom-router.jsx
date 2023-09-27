import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/users/home-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
