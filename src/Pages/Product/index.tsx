import {
  Box,
  Button,
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

export const Product = () => {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);

  return (
    <HStack spacing={5} height="100vh" width="100vw" justifyContent="center">
      <Box>
        <Heading size="lg">Multiplicand</Heading>
        <NumberButton numberSetter={setNo1} />
      </Box>

      <Box>
        <Heading size="lg">Multiplier</Heading>
        <NumberButton numberSetter={setNo2} />
      </Box>

      <Box>
        <Heading size={"lg"}>Product</Heading>
        <Box>{no1 * no2}</Box>
      </Box>
    </HStack>
  );
};

export const NumberButton = ({
  numberSetter,
}: {
  numberSetter: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <NumberInput defaultValue={0}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper
          onClick={() => numberSetter((prev) => prev + 1)}
        />
        <NumberDecrementStepper
          onClick={() => numberSetter((prev) => prev - 1)}
        />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default Product;
