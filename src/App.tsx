import { TodoPage } from "./TodoPage";
import { ColorPicker } from "./ColorPicker";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <HStack>
        <TodoPage />
        <ColorPicker />
      </HStack>
    </div>
  );
}

export default App;
