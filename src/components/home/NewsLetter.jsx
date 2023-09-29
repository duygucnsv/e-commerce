import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <Box bgColor="orange.100" p="5%" mb="30px" fontSize="14px">
      <Heading mainText={"Haber bültenimize abone olun"} />
      <Flex
        justify="center"
        align="center"
        m="auto"
        w="fit-content"
        p="2px"
        border="1px"
        bg="orange.50"
        borderColor="orange.200"
        borderRadius="0"
      >
        <Input
          placeholder="Mail adresinizi giriniz..."
          fontSize="14px"
          borderRadius="0"
          border="none"
          w={["100%", "100%", "350px"]}
        />
        <Link
          // to="/"
          bgColor="brand.900"
          p="10px 25px"
          border="1px"
          borderColor="orange.900"
          color="white"
        >
          Abone ol
        </Link>
      </Flex>
    </Box>
  );
};

export default NewsLetter;
