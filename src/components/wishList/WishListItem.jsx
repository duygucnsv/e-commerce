import React from "react";
import { Box, Grid } from "@chakra-ui/react";

import Heading from "../heading/Heading";
import Product from "../product/Product";
import { useSelector } from "react-redux";

const WishListItem = () => {
  const wishlist = useSelector((state) => state.data.wishlist);

  return (
    <Box py="30px">
      <Heading
        mainText={"FAVORİLERİM"}
        subText={
          "Kaydedilen ürünlerinizin tümü burada. Buradan sepete ekleyebilirsiniz."
        }
      />

      <Grid
        gap={4}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        px={["20px", "20px", "10%"]}
      >
        {wishlist &&
          wishlist.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
      </Grid>
    </Box>
  );
};

export default WishListItem;
