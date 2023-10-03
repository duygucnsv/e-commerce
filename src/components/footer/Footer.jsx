import { Box, Flex, Link, Text } from "@chakra-ui/react";
import SocialLinks from "../sociallinks/SocialLinks";

const Footer = () => {
  return (
    <footer>
      <Flex
        justify="space-between"
        flexWrap="wrap"
        py="5%"
        px={["10px", "20px", "10%"]}
        fontSize="14px"
        bgColor="orange.100"
      >
        <Box w={["100%", "50%", "30%", "23%"]} my="3" px="3">
          <SocialLinks />
          <Text>İstanbul,Türkiye</Text>
          <Link href="mailto:support@canstekstil.com">
            Support@canstekstil.com
          </Link>
        </Box>
      </Flex>

      <Flex
        mb={["12%", "12%", 0]}
        justify="space-between"
        py="20px"
        px={["20px", "20px", "10%"]}
        bgColor="orange.300"
        color="white"
        fontSize="14px"
      >
        <Text>Duygu Cansev</Text>
        <Text>Copyright &copy; {new Date().getFullYear()}</Text>
      </Flex>
    </footer>
  );
};

export default Footer;
