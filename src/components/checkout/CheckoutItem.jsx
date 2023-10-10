import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Select,
  Text,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { Country, State, City } from "country-state-city";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

const CheckoutItem = () => {
  const [countryCode, setCountryCode] = useState("TR"); // Türkiye
  const [stateCode, setStateCode] = useState("34"); // İstanbul
  return (
    <Box py="50px" px={["20px", "20px", "10%"]}>
      <Heading
        mainText={"ÖDEMELER"}
        subText={"Gerekli bilgileri doldurarak ürünlerinizi sipariş edin."}
      />

      <Flex flexWrap="wrap">
        <Box w={["100%", "100%", "60%"]} fontSize="14px">
          <Box p="20px" bgColor="orange.100">
            <Text
              fontWeight="700"
              fontSize="16px"
              mb="3"
              p="2"
              color="brand.900"
            >
              ŞİMDİ SİPARİŞ VER
            </Text>
            <form method="post" action="/">
              <Box bgColor="white" p="20px">
                <Box>
                  <h2>
                    <Box
                      flex="1"
                      p="1"
                      textAlign="left"
                      fontSize="14px"
                      fontWeight="600"
                    >
                      Kişisel Detaylar
                    </Box>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Adı Soyadı:
                      </FormLabel>
                      <Input
                        type="text"
                        name="fullname"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Email Adres:
                      </FormLabel>
                      <Input
                        type="text"
                        name="email"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Şirket (isteğe bağlı):
                      </FormLabel>
                      <Input
                        type="text"
                        name="company"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                  </h2>
                </Box>

                <Box my="4">
                  <h2>
                    <Box flex="1" p="1" textAlign="left">
                      Adres Bilgileri
                    </Box>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Gönderi adresi :
                      </FormLabel>
                      <Input
                        type="text"
                        name="address"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Adres Devamı:
                      </FormLabel>
                      <Input
                        type="text"
                        name="state"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="0px"
                        left="17px"
                      >
                        Ülke:
                      </FormLabel>
                      <Select
                        onChange={(e) => setCountryCode(e.target.value)}
                        fontSize="14px"
                        borderRadius="0"
                      >
                        {Country.getAllCountries().map((country, index) => {
                          return (
                            <option value={country.isoCode} key={index}>
                              {country.name}
                            </option>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="5px"
                        left="17px"
                      >
                        Şehir:
                      </FormLabel>
                      <Select
                        onChange={(e) => setStateCode(e.target.value)}
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      >
                        {State.getStatesOfCountry(countryCode).map(
                          (state, index) => {
                            return (
                              <option value={state.isoCode} key={index}>
                                {state.name}
                              </option>
                            );
                          }
                        )}
                      </Select>
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        İlçe:
                      </FormLabel>
                      <Select my="1" fontSize="14px" borderRadius="0">
                        {City.getCitiesOfState(countryCode, stateCode).map(
                          (city, index) => {
                            return (
                              <option value={city.isoCode} key={index}>
                                {city.name}
                              </option>
                            );
                          }
                        )}
                      </Select>
                    </FormControl>
                    <FormControl my="5">
                      <FormLabel
                        fontSize="12px"
                        color="brand.400"
                        top="7px"
                        left="17px"
                      >
                        Telefon numarası:
                      </FormLabel>
                      <Input
                        type="tel"
                        name="phone"
                        my="1"
                        fontSize="14px"
                        borderRadius="0"
                      />
                    </FormControl>
                  </h2>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>

        <Box
          w={["100%", "100%", "36%"]}
          border="1px solid #f4f4f4"
          fontSize="14px"
          p="20px"
          mx={[0, 0, "2%"]}
        >
          <Box>
            <FormControl my="5">
              <FormLabel
                fontSize="12px"
                color="brand.400"
                top="7px"
                left="17px"
              >
                Kart sahibi:
              </FormLabel>
              <Input type="text" name="cardName" borderRadius="0" />
            </FormControl>
            <FormControl my="5">
              <FormLabel
                fontSize="12px"
                color="brand.400"
                top="7px"
                left="17px"
              >
                Kart numarası:
              </FormLabel>
              <Input type="text" name="CardNumber" borderRadius="0" />
            </FormControl>
            <Select name="type" borderRadius="0" my="5">
              <option>Visa</option>
              <option>Mastercard</option>
              <option>American Express</option>
            </Select>
            <Flex my="5" justify="space-between">
              <FormControl w="70%">
                <FormLabel
                  fontSize="12px"
                  color="brand.400"
                  top="7px"
                  left="17px"
                >
                  Son kullanma tarihi:
                </FormLabel>
                <Input
                  type="text"
                  name="expiry"
                  my="0"
                  me="1"
                  borderRadius="0"
                />
              </FormControl>
              <FormControl w="25%">
                <FormLabel
                  fontSize="12px"
                  color="brand.400"
                  top="7px"
                  left="17px"
                >
                  CVV:
                </FormLabel>
                <Input type="text" name="cvv" borderRadius="0" />
              </FormControl>
            </Flex>
          </Box>

          <Flex m="20px 0" bgColor="white" p="10px 0">
            <Button
              //   href="/order"
              p="12px"
              w="100%"
              textAlign="center"
              bgColor="orange.200"
              color="brand.900"
              borderRadius="0"
              _hover={{ bgColor: "orange.300" }}
            >
              Sipariş Verin
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CheckoutItem;
