import {
  Avatar,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
  Box,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { FiHeart, FiHome, FiShoppingCart } from "react-icons/fi";
import SearchBar from "../searchbar/SearchBar";
import SocialLinks from "../sociallinks/SocialLinks";

import { BiStore } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const user = [];
  return (
    <>
      <Button
        href="/"
        me={["7px", "5px", 0]}
        fontSize="20px"
        ms="2"
        bgColor="white"
        border="none"
        onClick={onOpen}
        minW="auto"
      >
        <HiMenu />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            py="4"
            px="3"
            m="3"
            border="1px"
            borderColor="gray.100"
            borderRadius="0"
          />
          <DrawerHeader my="2" display="flex" alignItems="center">
            <Avatar size="sm" me="2" />
            <Box>
              <Link href={user ? "/dashboard" : "/login"} fontSize="14px">
                {user ? "Hoşgeldiniz" : "Giriş yapın"}
              </Link>
            </Box>
          </DrawerHeader>
          <DrawerBody fontSize="14px">
            <SearchBar />

            <Box fontSize="15px" my="8" mx="1">
              <Box fontWeight="600" my="2">
                <NavLink navlocation={"Anasayfa"}>
                  <FiHome />
                </NavLink>
              </Box>
              <Box fontWeight="600" my="2">
                <NavLink navlocation={"Mağaza"}>
                  <BiStore />
                </NavLink>
              </Box>
              <Box fontWeight="600" my="2">
                <NavLink navlocation={"Sepet"}>
                  <FiShoppingCart />
                </NavLink>
              </Box>
              <Box fontWeight="600" my="2">
                <NavLink navlocation={"Favoriler"}>
                  <FiHeart />
                </NavLink>
              </Box>
              {!user ? (
                ""
              ) : (
                <Box fontWeight="600" my="2">
                  <Box
                    display="flex"
                    navlocation={"Logout"}
                    cursor={"pointer"}
                    // onClick={() => handleLogout()}
                    py="2"
                    alignItems="center"
                    w="100%"
                    _hover={{ color: "orange.600" }}
                  >
                    <FaSignOutAlt />
                    <Text cursor={"pointer"} me="3" ml={"10px"}>
                      Çıkış
                    </Text>
                  </Box>
                </Box>
              )}
            </Box>

            <Box py="2" mt="4">
              <Text fontWeight="600">Info@example.com</Text>
              <SocialLinks />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
