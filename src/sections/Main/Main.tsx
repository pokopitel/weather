import { Grid, GridItem, Text } from "@chakra-ui/react";

import Scrollbars from "react-custom-scrollbars";

import { MainCard } from "./MainCard";

export const Main = () => {
  return (
    <Scrollbars autoHeightMax="calc(100vh - 126px)" autoHeight>
      <Grid
        w="100%"
        templateRows="350px"
        templateColumns="350px auto"
        gap={6}
        mb={7}
      >
        <GridItem>
          <MainCard
            title="Today"
            image="images/rain-thunder.png"
            backgroundSize="contain"
            hasBorder
          >
            <Text size="smSbBlue">Rainny</Text>

            <Text size="mdSbBlue">22°C</Text>

            <Text size="xsSbBlue">10°C</Text>
          </MainCard>
        </GridItem>

        <GridItem>
          <MainCard
            title="Wind"
            image="images/windy-card.png"
            backgroundSize="cover"
          >
            <Text size="mdSbBlue">7m/s</Text>

            <Text size="xsSbBlue">Calm</Text>
          </MainCard>
        </GridItem>
      </Grid>

      <Grid w="100%" templateRows="350px" templateColumns="auto 350px" gap={6}>
        <GridItem>
          <MainCard
            title="Wind"
            image="images/pressure-card.png"
            backgroundSize="cover"
          >
            <Text size="mdSbBlue">22mb</Text>
          </MainCard>
        </GridItem>

        <GridItem>
          <MainCard
            title="Today"
            image="images/rain-thunder.png"
            backgroundSize="contain"
            hasBorder
          >
            <Text size="smSbBlue">Rainny</Text>

            <Text size="mdSbBlue">22°C</Text>

            <Text size="xsSbBlue">10°C</Text>
          </MainCard>
        </GridItem>
      </Grid>
    </Scrollbars>
  );
};
