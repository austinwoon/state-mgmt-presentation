import { Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "./ContextWrapper";

export const Counter = () => {
  const { count, incrementCount } = useContext(GlobalContext);

  return (
    <>
      <Heading>{count}</Heading>
      <Button onClick={incrementCount}>+1</Button>
    </>
  );
};
