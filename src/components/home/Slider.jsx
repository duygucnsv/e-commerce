import { Box, Flex } from "@chakra-ui/react";
import React, { Suspense } from "react";
import HeroSection from "../heroSection/HeroSection";
import product08bg from "../../assets/imgs/product08bg.jpg";
import Loader from "../loader/Loader";

const Slider = () => {
  return (
    <Flex justify="flex-end" align="center" position="relative">
      <Box w={["100%", "100%", "70%"]}>
        <Suspense fallback={<Loader />}>
          <Box
            w="100%"
            h="600px"
            backgroundImage={`url(${product08bg})`}
            backgroundSize="cover"
            bgPosition="50%, 75%"
            alt="bgImage"
          ></Box>
        </Suspense>
      </Box>
      <HeroSection
        mainText={"Adım Adım Tarzını Yansıt!"}
        subText={
          "Hem şıklığı hem de fonksiyonelliği bir araya getiren bu küçük parçalar, giyim tarzımızın önemli bir yansımasıdır."
        }
      />
    </Flex>
  );
};

export default Slider;
