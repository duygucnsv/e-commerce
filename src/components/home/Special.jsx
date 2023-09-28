import { Box, Grid } from "@chakra-ui/react";
import React, { Suspense } from "react";
import Heading from "../heading/Heading";
import { data } from "../../data/products";

const Product = React.lazy(() => import("../../components/product/Product"));

const Special = () => {
  return (
    <Box py="5%" px={[null, "20px", "5%", "10%"]}>
      <Heading
        mainText={"SİZE ÖZEL FIRSATLAR"}
        subText={"Müşterilerimizin en sevdiği ürünleri siz de alabilirsiniz."}
      />

      <Grid
        gap={4}
        w="100%"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        {data.products.map((product) => {
          return (
            <Suspense key={product.id} fallback={<div>Loading...</div>}>
              <Product key={product.id} product={product} />
            </Suspense>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Special;
