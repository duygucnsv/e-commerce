import React from "react";
import { Box } from "@chakra-ui/react";

import Slider from "../../components/home/Slider";
import Discounts from "../../components/home/Discounts";

// const Product = React.lazy(() => import("../../components/product/product"));

const HomePage = () => {
  return (
    <Box>
      <Slider />
      <Discounts />
    </Box>
  );
};

export default HomePage;
