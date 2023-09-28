import React from "react";
import { Box } from "@chakra-ui/react";

import Slider from "../../components/home/Slider";
import Discounts from "../../components/home/Discounts";
import Special from "../../components/home/Special";
import UnderTitle from "../../components/home/UnderTitle";
import NewsLetter from "../../components/home/NewsLetter";

// const Product = React.lazy(() => import("../../components/product/product"));

const HomePage = () => {
  return (
    <Box>
      <Slider />
      <Discounts />
      <Special />
      <UnderTitle />
      <NewsLetter />
    </Box>
  );
};

export default HomePage;
