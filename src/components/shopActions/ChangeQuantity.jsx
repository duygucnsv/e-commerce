import { Button, Flex } from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartQuantity,
  increaseCartQuantity,
} from "../../redux/slice/cartSlice";

const ChangeQuantity = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.data.cart);

  return (
    <Flex justify="flex-end" border="1px solid #FEEBC8" p="3px">
      <Button
        size="sm"
        borderColor="orange.100"
        fontSize="10px"
        borderRadius="0"
        p="1"
        onClick={() => dispatch(increaseCartQuantity(product.id))}
      >
        <FaPlus borderColor="orange.100" />
      </Button>

      {cart
        .filter((item) => item.id === product.id)
        .map((element, index) => {
          return (
            <Button
              key={index}
              size="sm"
              type="number"
              borderColor="orange.100"
              fontSize="12px"
              borderRadius="0"
              bgColor="whiteAlpha.500"
              w="40px"
            >
              {element.quantity || 1}
            </Button>
          );
        })}

      <Button
        size="sm"
        borderColor="orange.100"
        fontSize="10px"
        borderRadius="0"
        p="1"
        onClick={() => dispatch(decreaseCartQuantity(product.id))}
      >
        <FaMinus borderColor="orange.100" />
      </Button>
    </Flex>
  );
};

export default ChangeQuantity;
