import { useEffect, useState } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg4 from "../../assets/imgs/bg4.jpg";
import product05 from "../../assets/imgs/product05.jpg";
import bg5 from "../../assets/imgs/bg5.jpg";
import { useSelector } from "react-redux";

import { shopSliderSettings } from "../../utils/sliderSettings";
import { filterProducts } from "../../utils/filterProducts";
import ShopFilters from "../shopActions/ShopFilters";
import Product from "../product/Product";

const ShopItem = () => {
  const [products, setProducts] = useState([]);
  const defaultProducts = useSelector((state) => state.data.products);

  useEffect(() => {
    setProducts(defaultProducts);
  }, [setProducts, defaultProducts]);

  const handleFilters = (filters) => {
    let filterResult = filterProducts(defaultProducts, filters);
    setProducts(filterResult);
  };

  return (
    <Box>
      <Flex justify="center" w="100%">
        <Slider
          {...shopSliderSettings}
          style={{ width: "100%", overflow: "hidden", display: "flex" }}
        >
          <Box
            w="100%"
            h="250px"
            backgroundImage={`url(${product05})`}
            backgroundSize="cover"
            bgPosition="50%, 75%"
          >
            <Box
              float="right"
              p="5% 30px"
              lineHeight="40px"
              fontSize="0.8rem"
              w={["50%"]}
            >
              <Text mt="30px" fontSize="20px" fontWeight="700" color="gray.300">
                Çoraplarımızda %60'a varan indirimlerden yararlanın
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="250px"
            backgroundImage={`url(${bg5})`}
            backgroundSize="cover"
            bgPosition="50%, 75%"
          >
            <Box
              float="right"
              p="5% 30px"
              lineHeight="40px"
              fontSize="0.8rem"
              w={["50%"]}
            >
              <Text mt="30px" fontSize="20px" fontWeight="700" color="gray.300">
                Ücretsiz teslimat seçeneğimizden yararlanın
              </Text>
            </Box>
          </Box>
          <Box
            w="100%"
            h="250px"
            backgroundImage={`url(${bg4})`}
            backgroundSize="cover"
            bgPosition="50%, 75%"
          >
            <Box
              float="right"
              p="5% 30px"
              lineHeight="40px"
              fontSize="0.8rem"
              w={["50%"]}
            >
              <Text mt="30px" fontSize="20px" fontWeight="700" color="gray.300">
                Yaz koleksiyonlarımızda flaş indirimler devam ediyor
              </Text>
            </Box>
          </Box>
        </Slider>
      </Flex>

      <Flex my="5%" mx={["20px", "20px", "10%"]} flexWrap="wrap">
        <ShopFilters
          handleFilters={handleFilters}
          clearFilters={() => setProducts(defaultProducts)}
        />

        <Box w={["100%", "100%", "auto"]} flex="1">
          <Grid
            gap={4}
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(3, 1fr)",
            ]}
          >
            {products &&
              products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default ShopItem;
