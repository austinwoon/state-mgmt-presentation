import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
const styles = {
  height: "100vh",
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
};

const countAtom = atom(0);

const Playground = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  const [count, setCount] = useAtom(countAtom);

  const handleAddCount = () => setCount((cnt) => cnt + 1);

  return (
    <Flex {...styles}>
      <Heading>Current count: {count}</Heading>
      <Button onClick={handleAddCount}> + 1</Button>
    </Flex>
  );
};

export default Playground;
