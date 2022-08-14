import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
const styles = {
  height: "100vh",
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
};

const Playground = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => setCount((cnt) => cnt + 1);

  return (
    <Flex {...styles}>
      <Heading>Current count: {count}</Heading>
      <Button onClick={handleAddCount}> + 1</Button>
    </Flex>
  );
};

export default Playground;
