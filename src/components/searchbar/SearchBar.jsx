import { Button, Flex, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form action="/Search" style={{ flex: 1 }}>
      <Flex
        align="center"
        w="100%"
        p="2px"
        border="1px"
        bg="orange.50"
        borderColor="orange.200"
        borderRadius="30px"
        position="relative"
      >
        <Input
          placeholder="Buraya yazınız..."
          className="query"
          name="query"
          fontSize="14px"
          border="none"
          type="search"
          borderRadius="30px"
        />

        <Button
          type="submit"
          href="/"
          bgColor="orange.200"
          p="3"
          border="1px"
          borderRadius="30px"
          borderColor="orange.100"
          _hover={{ bgColor: "orange.300" }}
        >
          <FaSearch />
        </Button>
      </Flex>
    </form>
  );
};

export default SearchBar;
