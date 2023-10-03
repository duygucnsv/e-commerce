import { Badge, Box, Flex, Image, Link } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../../assets/imgs/logo.png";

import { FaUserCircle } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";
import Button from "../button/Button";

const Topbar = () => {
  const location = useLocation().pathname;
  const cart = useSelector((state) => state.data.cart);
  const user = [];
  const active = {
    color: "brand.900",
  };

  return (
    <nav>
      <Flex
        justify="space-between"
        align="center"
        shadow="base"
        px={[null, "0px", "5%", "5%"]}
        py="2.5"
      >
        {/* Brand logo and name */}
        <Flex
          align="center"
          minW="15%"
          fontSize="18px"
          color="brand.900"
          ps={["20px", "20px", 0]}
        >
          <Link
            href="/Anasayfa"
            fontWeight={600}
            color="black"
            ms="2"
            title="logo"
          >
            <Image src={logo} width="120px" alt="logo" />
          </Link>
        </Flex>

        <Box flex="1" me="6" display={["none", "none", "flex"]}>
          <SearchBar />
        </Box>

        <Flex align="center" justify="flex-end">
          <Link
            href="/Sepet"
            p="2"
            fontSize="18px"
            display={["none", "none", "flex"]}
            me={6}
            position="relative"
            style={location === "/Sepet" ? active : { color: "" }}
            _hover={{ color: "brand.900" }}
            title="cart"
          >
            <FiShoppingCart />
            <Badge
              color="white"
              bgColor="orange.200"
              position="absolute"
              top="0"
              right="-5px"
            >
              {cart.length}
            </Badge>
          </Link>

          {!user ? (
            <Button text={"Login"} href={"/Login"} />
          ) : (
            <Link
              // href="/Dashboard"
              fontSize={"20px"}
              opacity={"0.7"}
            >
              <FaUserCircle />
            </Link>
          )}

          <Navbar />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Topbar;
