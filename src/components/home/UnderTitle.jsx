import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import product03 from "../../assets/imgs/product03.jpg";
import { Link as RouterLink } from "react-router-dom";

const UnderTitle = () => {
  return (
    <Box py="5%" px={[null, "0", "5%", "10%"]} my="5%">
      <Flex justify="space-between" flexWrap="wrap">
        <Box w={[null, "100%", "40%"]} p="5%" ps={["5%", "5%", 0]}>
          <Text fontSize={["20px", "30px"]} fontWeight="700" pb="15px">
            Benzersiz şekillere sahip sanatsal tasarımlar.
          </Text>
          <Text fontSize="14px" fontWeight="600" mb="35px">
            Bir çorabın amacı sizi rahat ettirirken aynı zamanda ayağınızı
            güzelleştirmek 😊
          </Text>
          <Button
            as={RouterLink}
            to="/Mağaza"
            fontSize="14px"
            p="10px 20px"
            bgColor="orange.200"
            color="brand.900"
            borderRadius="0"
            _hover={{ bgColor: "orange.300" }}
          >
            Ürünlere git
          </Button>
        </Box>
        <Image
          src={product03}
          w={[null, "100%", "60%"]}
          alt="bg"
          border="5px"
          borderStyle="solid"
          borderColor="orange.300"
          loading="lazy"
        />
      </Flex>
    </Box>
  );
};

export default UnderTitle;
