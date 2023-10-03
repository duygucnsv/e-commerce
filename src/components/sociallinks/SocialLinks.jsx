import { Flex, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    { to: "https://facebook.com", icon: <FaFacebook /> },
    { to: "https://twitter.com", icon: <FaTwitter /> },
    { to: "https://linkedin.com", icon: <FaLinkedin /> },
  ];

  return (
    <Flex py="4">
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.to}
          p="2"
          bgColor="orange.300"
          color="white"
          me="2"
          borderRadius="2px"
          _hover={{ bgColor: "orange.400" }}
        >
          {link.icon}
        </Link>
      ))}
    </Flex>
  );
};

export default SocialLinks;
