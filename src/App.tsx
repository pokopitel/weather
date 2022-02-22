import { ChakraProvider } from "@chakra-ui/react";
import { View } from "./view/View";

const App = () => {
  return (
    <ChakraProvider>
      <View />
    </ChakraProvider>
  );
};

export default App;
