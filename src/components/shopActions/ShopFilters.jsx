import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ShopFilters = ({ handleFilters, clearFilters }) => {
  const [filters, setFilters] = useState({
    categories: ["Havlu", "Örme"],
    brands: ["Cans", "Cans"],
    price: [0, 500],
    discount: 0,
  });

  const handleCategories = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, e.target.value],
      });
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter(
          (item) => item !== e.target.value
        ),
      });
    }
  };

  const handleBrands = (e) => {
    if (e.target.checked) {
      setFilters({
        ...filters,
        brands: [...filters.brands, e.target.value],
      });
    } else {
      setFilters({
        ...filters,
        brands: filters.brands.filter((item) => item !== e.target.value),
      });
    }
  };

  const submitFilters = () => {
    console.log(filters);
    handleFilters(filters);
  };

  return (
    <Box w={["100%", "100%", "320px"]} p="2" bgColor={"orange.100"}>
      <Text
        p="20px"
        border="1px solid orange.100"
        fontWeight="600"
        color="brand.900"
      >
        Filtrele
      </Text>
      <Accordion p="20px" bgColor="white">
        <AccordionItem>
          <AccordionButton
            my="10px"
            fontWeight="600"
            color="brand.900"
            _hover={{ color: "orange.600" }}
          >
            Kategoriler
          </AccordionButton>
          <AccordionPanel>
            <Box>
              {["Havlu", "Örme"].map((item, index) => {
                return (
                  <Checkbox
                    key={index}
                    p="2"
                    value={item}
                    colorScheme="orange"
                    onChange={(e) => handleCategories(e)}
                    defaultChecked
                  >
                    {" "}
                    {item}
                  </Checkbox>
                );
              })}
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            my="10px"
            fontWeight="600"
            color="brand.900"
            _hover={{ color: "orange.600" }}
          >
            Markalar
          </AccordionButton>
          <AccordionPanel>
            <Box>
              {["Cans", "Cans"].map((item, index) => {
                return (
                  <Checkbox
                    key={index}
                    p="2"
                    value={item}
                    colorScheme="orange"
                    onChange={(e) => handleBrands(e)}
                    defaultChecked
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton
            my="10px"
            fontWeight="600"
            color="brand.900"
            _hover={{ color: "orange.600" }}
          >
            Fiyat
          </AccordionButton>
          <AccordionPanel>
            <RangeSlider
              max={500}
              aria-label={"price"}
              colorScheme="orange"
              defaultValue={[0, 500]}
              onChangeEnd={(val) => setFilters({ ...filters, price: val })}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex justify="space-between" w="100%">
              <Text>Min: {filters.price[0]}</Text>
              <Text>Max: {filters.price[1]}</Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Flex p="20px">
        <Button
          bgColor="orange.500"
          _hover={{ bgColor: "orange.600" }}
          color="white"
          flex="1"
          me="2"
          borderRadius="0"
          onClick={() => submitFilters()}
        >
          Uygula
        </Button>
        <Button
          borderRadius="0"
          bgColor="orange.500"
          _hover={{ bgColor: "orange.600" }}
          color="white"
          onClick={() => clearFilters()}
        >
          Temizle
        </Button>
      </Flex>
    </Box>
  );
};

export default ShopFilters;
