import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../../redux/slice/cartSlice";

const ChangeQuantity = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.data.cart.find((item) => item.id === product.id)
  );

  const handleIncreaseClick = () => {
    dispatch(increaseCartQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseCartQuantity(product.id));
  };

  return (
    <Flex justify="flex-end" border="1px solid #FEEBC8" p="3px">
      <Button
        size="sm"
        bgColor="orange.100"
        fontSize="10px"
        borderRadius="0"
        p="1"
        onClick={handleIncreaseClick}
      >
        <FaPlus borderColor="orange.100" />
      </Button>

      <Button
        size="sm"
        type="number"
        borderColor="orange.100"
        fontSize="12px"
        borderRadius="0"
        bgColor="whiteAlpha.500"
        w="40px"
      >
        {cartItem ? cartItem.quantity || 1 : 1}
      </Button>

      <Button
        size="sm"
        bgColor="orange.100"
        fontSize="10px"
        borderRadius="0"
        p="1"
        onClick={handleDecreaseClick}
      >
        <FaMinus borderColor="orange.100" />
      </Button>
    </Flex>
  );
};

export default ChangeQuantity;
