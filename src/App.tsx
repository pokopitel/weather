import { ChakraProvider, Stack, VStack } from "@chakra-ui/react";

import { Bar } from "./sections/Bar/Bar";
import { Header } from "./sections/Header";
import { Main } from "./sections/Main/Main";

import { theme } from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Stack
        p={[4, 4, 6]}
        gap={8}
        overflow="hidden"
        maxWidth="100vw"
        maxHeight="100vh"
        flexDirection="row"
        minW={300}
      >
        <VStack w={["100%", "100%", "70%", "75%"]} spacing={8}>
          <Header />

          <Main />
        </VStack>

        <Bar />
      </Stack>
    </ChakraProvider>
  );
};

export default App;
