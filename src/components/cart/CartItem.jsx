import { useState, useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

import { FaHandPointDown } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { removeProductFromCart } from "../../redux/slice/cartSlice";
import { Link as RouterLink } from "react-router-dom";
import ChangeQuantity from "../shopActions/ChangeQuantity";
import Heading from "../heading/Heading";

const Cart = () => {
  const [discountCode, setDiscountCode] = useState("");

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);
  const [subTotal, setSubTotal] = useState(0);

  let totalAmount = subTotal + 29.9; // Teslimat ücretini dahil et
  let discountAmount = 0;

  if (discountCode) {
    // İndirim kodunu uygula (örneğin, %50 indirim)
    discountAmount = subTotal * 0.5; // %50 indirim olarak varsayılan
    totalAmount -= discountAmount;
  }
  const applyDiscountCode = () => {
    // Burada indirim kodunu kullanarak uygun indirimi sağlayabiliriz.
    // Örneğin, bir API çağrısı yaparak indirimi kontrol edebiliriz.
    // Şu an için basitçe %50 indirim uyguluyoruz.
    setSubTotal(subTotal - subTotal * 0.5); // %50 indirim
  };

  useEffect(() => {
    let subTotalSum = 0;
    cart.map((item) => {
      return (subTotalSum += item.price * (item.quantity || 1));
    });
    setSubTotal(subTotalSum);
  }, [setSubTotal, cart]);

  return (
    <Box py="50px" px={["20px", "20px", "10%"]}>
      <Heading mainText={"SEPETİM"} subText={"Siparişi tamamlayın..."} />

      <Flex flexWrap="wrap" bgColor="orange.100">
        <Box w="100%" fontSize="14px">
          <Flex
            flexWrap={["wrap", "no-wrap"]}
            align={"flex-start"}
            bgColor="orange.100"
            my="10px"
          >
            <Box w={["100%", "100%", "60%"]}>
              {cart && cart.length === 0 ? (
                <Text
                  fontSize="14px"
                  fontWeight="bold"
                  p="30px"
                  minH="30%"
                  bgColor="white"
                >
                  Sepetiniz boş. Şuradan ürün ekleyin: <br />
                  <Button
                    as={RouterLink}
                    to="/Mağaza"
                    bgColor="orange.200"
                    fontSize="14px"
                    p="12px 25px"
                    border="1px"
                    borderColor="orange.200"
                    borderRadius="0"
                  >
                    Ürünler
                  </Button>
                </Text>
              ) : (
                cart.map((product) => {
                  return (
                    <Flex
                      key={product.id}
                      align="center"
                      borderBlock="1px solid #f3f3f3"
                      bgColor="white"
                      p="10px"
                    >
                      <RouterLink to={`/singleProduct?id=${product.id}`}>
                        <Image src={product.thumbnail} w={["100px", "150px"]} />
                      </RouterLink>

                      <Box p="30px 10px" flex="1">
                        <Text fontWeight="bold">
                          {product.title}
                          <Badge
                            cursor="pointer"
                            colorScheme="orange"
                            p="2"
                            float="right"
                            _hover={{ bgColor: "orange.300" }}
                          >
                            <FiTrash
                              onClick={() =>
                                dispatch(removeProductFromCart(product.id))
                              }
                            />
                          </Badge>
                        </Text>
                        <Text>{product.category}</Text>
                        <Flex
                          justify="space-between"
                          align="flex-end"
                          flexWrap="wrap"
                          w="100%"
                          mt="6"
                        >
                          <Text fontSize="18px" fontWeight="bold">
                            {product.price}₺
                          </Text>
                          <ChangeQuantity product={product} />
                        </Flex>
                      </Box>
                    </Flex>
                  );
                })
              )}
            </Box>

            <Box p="10px" w={["100%", "100%", "40%"]}>
              <Flex p="3">
                <Text>Kupon kodun var mı? Buraya girin </Text>
                <Text color="brand.900" p="5px 10px">
                  <FaHandPointDown />
                </Text>
              </Flex>
              <Flex
                align="center"
                w="100%"
                p="2px"
                mb="5%"
                border="1px"
                bgColor="white"
                borderColor="orange.100"
                borderRadius="0"
              >
                <Input
                  placeholder="İndirim kodunuzu girin.."
                  fontSize="14px"
                  borderColor="gray.100"
                  borderRadius="0"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />

                <Button
                  onClick={applyDiscountCode}
                  bgColor="orange.200"
                  fontSize="14px"
                  p="12px 25px"
                  color="brand.900"
                  borderRadius="0"
                  _hover={{ bgColor: "orange.300" }}
                >
                  İndirim Kodu
                </Button>
              </Flex>
              <Text p="3" color="brand.900">
                Sipariş Özeti
              </Text>
              <Flex justify="space-between" bgColor="white" p="15px">
                <Text>Ara Toplam</Text>
                <Text as="b">{subTotal}₺</Text>
              </Flex>
              <Flex justify="space-between" bgColor="white" p="15px">
                <Text>Teslimat</Text>
                <Text as="b">29.90₺</Text>
              </Flex>
              <Flex justify="space-between" bgColor="white" p="15px">
                <Text>İndirim</Text>
                <Text as="b">{discountAmount}₺</Text>
              </Flex>

              <Divider />

              <Flex justify="space-between" bgColor="white" p="15px">
                <Text>Toplam:</Text>
                <Text as="b" fontSize="20px" color="brand.900">
                  {totalAmount}₺
                </Text>
              </Flex>

              <Flex m="20px 0" bgColor="white" p="10px">
                <Button
                  href="/Ödemeler"
                  p="12px"
                  w="100%"
                  textAlign="center"
                  bgColor="orange.200"
                  color="brand.900"
                  borderRadius="0"
                  _hover={{ bgColor: "orange.300" }}
                >
                  Şimdi ödeme yap
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Cart;
