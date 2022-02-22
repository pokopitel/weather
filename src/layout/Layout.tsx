import { Grid } from "@chakra-ui/react";
import { Bar } from "./Bar";
import { Content } from "./Content";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateRows="repeat(10, 1fr)"
      templateColumns="repeat(10, 1fr)"
      gap={6}
      p={6}
    >
      <Header />
      <Bar />
      <Content />
    </Grid>
  );
};
