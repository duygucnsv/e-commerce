import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import product05 from "../../assets/imgs/product05.jpg";
import product11 from "../../assets/imgs/product11.jpg";
import product14 from "../../assets/imgs/product14.jpg";
import Heading from "../heading/Heading";

const Discounts = () => {
  return (
    <Box fontSize="14px" px={[null, "10px", "5%", "10%"]} m="10% 0 50px 0">
      <Heading
        mainText={"TÜM SATIN ALIMLARDA MUHTEŞEM İNDİRİMLER ALIN"}
        subText={"Teklifler, Teşvikler ve indirimlerin tamamı sizin için."}
      />
      <Flex justify="space-between" flexWrap="wrap" px={["20px", "20px", null]}>
        <Link
          //   href="/Products"
          w={["100%", "48%", "32%"]}
          textAlign="right"
          style={{
            backgroundImage: `url(${product05})`,
            backgroundSize: "cover",
          }}
          my={["15px", null]}
        >
          <Box p="50px">
            <Text fontWeight="600" color="#E53E3E">
              ÖRME ÇORAP
            </Text>
            <Text fontWeight="600" color="brand.900" mb="20px">
              <Badge colorScheme="orange">30% tasarruf edin</Badge>
            </Text>
          </Box>
        </Link>
        <Link
          href="/Shop"
          w={["100%", "48%", "32%"]}
          textAlign="right"
          style={{
            backgroundImage: `url(${product11})`,
            backgroundSize: "cover",
          }}
          my={["15px", null]}
        >
          <Box p="50px">
            <Text fontWeight="600" color="#E53E3E">
              YENİ GELEN
            </Text>
            <Text fontWeight="600" color="brand.900" mb="20px">
              <Badge colorScheme="orange">50% tasarruf edin</Badge>
            </Text>
          </Box>
        </Link>
        <Link
          href="/Shop"
          w={["100%", "48%", "32%"]}
          textAlign="right"
          style={{
            backgroundImage: `url(${product14})`,
            backgroundSize: "cover",
          }}
          my={["15px", null]}
        >
          <Box p="50px">
            <Text fontWeight="600" color="#E53E3E">
              HAVLU ÇORAP
            </Text>
            <Text fontWeight="600" color="brand.900" mb="20px">
              <Badge colorScheme="orange">20% tasarruf edin</Badge>
            </Text>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Discounts;
