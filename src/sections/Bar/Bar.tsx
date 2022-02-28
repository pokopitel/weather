import { HStack, Stack, Text, useTheme } from "@chakra-ui/react";

import { Card } from "../../components/Card";
import { Slider } from "../../components/Slider";
import { WeatherPredictionCard } from "./WeatherPredictionCard";

import { WeatherType } from "../../types";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

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

const graphData = [33, 33, 33, 45, 20, 30, 37];

const headerCardHeight = 32;
const otherLastCardContentHeight = 565 - headerCardHeight;

export const Bar = () => {
  const theme = useTheme();

  const graphStrokeColor = theme.colors.white;
  const graphFillColor = theme.colors.red[500];

  return (
    <Stack w="25%" spacing={6}>
      <Card title="Rain">
        <HStack justifyContent="space-between">
          <Text size="sm">New York City, NY</Text>

          <Text size="md" color="orange.500" fontWeight={600}>
            16°C
          </Text>
        </HStack>
      </Card>

      <Card title="Day-slider">
        <Slider />
      </Card>

      <Card title="Temperature for last month">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            height={200}
            data={graphData.map((item) => ({ degrees: item }))}
            style={{ borderRadius: 10, overflow: "hidden" }}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="degrees"
              stroke={graphStrokeColor}
              fill={graphFillColor}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      <Card
        title="Weather Prediction"
        childContainerHeight={`calc(100vh - ${otherLastCardContentHeight}px`}
        hasScroll
      >
        {weatherPredictions.map((item) => (
          <WeatherPredictionCard
            key={item.date}
            forecast={item.forecast}
            degrees={item.degrees}
            date={item.date}
          />
        ))}
      </Card>
    </Stack>
  );
};
