import { Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";

import Scrollbars from "react-custom-scrollbars";

import { Slider } from "../../components/Slider";
import { WeatherPredictionCard } from "../Bar/WeatherPredictionCard";
import { MainCard } from "./MainCard";

import { WeatherType } from "../../types";

const weatherPredictions: {
  forecast: WeatherType;
  degrees: string;
  date: string;
}[] = [
  { forecast: WeatherType.CLOUDY, degrees: "22°C/14°C", date: "February 10" },
  { forecast: WeatherType.CLOUDY, degrees: "22°C/14°C", date: "February 11" },
  { forecast: WeatherType.CLOUDY, degrees: "22°C/14°C", date: "February 12" },
  { forecast: WeatherType.SUNNY, degrees: "22°C/14°C", date: "February 13" },
  { forecast: WeatherType.CLOUDY, degrees: "22°C/14°C", date: "February 14" },
  { forecast: WeatherType.SUNNY, degrees: "22°C/14°C", date: "February 15" },
  { forecast: WeatherType.CLOUDY, degrees: "22°C/14°C", date: "February 16" },
];

export const Main = () => {
  const variantHasBorder = useBreakpointValue({ base: false, md: true });
  const variantHasNotBorder = useBreakpointValue({ base: true, md: false });

  return (
    <Scrollbars autoHeightMax="calc(100vh - 126px)" autoHeight>
      <Grid
        w="100%"
        templateRows={[
          "minmax(20px, auto)",
          "minmax(20px, auto)",
          "250px",
          "300px",
          "350px",
        ]}
        templateColumns={[
          "auto",
          "auto auto",
          "auto auto",
          "300px auto",
          "350px auto",
        ]}
        gap={6}
        mb={[3, 4, 5, 6, 7]}
      >
        <GridItem
          rowSpan={1}
          colSpan={[1, 2]}
          px={3}
          display={["block", "block", "none"]}
        >
          <Slider />
        </GridItem>

        <GridItem>
          <MainCard
            title="Today"
            image="images/rain-thunder.png"
            backgroundSize="cover"
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
            image={[
              "images/rain-thunder.png",
              "images/rain-thunder.png",
              "images/rain-thunder.png",
              "images/windy-card.png",
            ]}
            backgroundSize={["cover", "cover", "cover", "cover"]}
            hasBorder={variantHasNotBorder}
          >
            <Text size="mdSbBlue">7m/s</Text>

            <Text size="xsSbBlue">Calm</Text>
          </MainCard>
        </GridItem>
      </Grid>

      <Grid
        w="100%"
        templateRows={["250px", "250px", "250px", "300px", "350px"]}
        templateColumns={["auto", "auto", "auto", "auto 300px", "auto 350px"]}
        gap={6}
      >
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
            image={[
              "images/windy-card.png",
              "images/windy-card.png",
              "images/windy-card.png",
              "images/rain-thunder.png",
            ]}
            backgroundSize={["cover", "cover", "cover", "contain"]}
            hasBorder={variantHasBorder}
          >
            <Text size="smSbBlue">Rainny</Text>

            <Text size="mdSbBlue">22°C</Text>

            <Text size="xsSbBlue">10°C</Text>
          </MainCard>
        </GridItem>

        <GridItem display={["block", "block", "none"]}>
          {weatherPredictions.map((item) => (
            <WeatherPredictionCard
              key={item.date}
              forecast={item.forecast}
              degrees={item.degrees}
              date={item.date}
            />
          ))}
        </GridItem>
      </Grid>
    </Scrollbars>
  );
};
