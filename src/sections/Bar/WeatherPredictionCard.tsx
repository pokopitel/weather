import { HStack, Icon, Text, VStack } from "@chakra-ui/react";

import { getIcon } from "../../utils/getIcon";

import { WeatherType } from "../../types";

type WeatherPredictionCardProps = {
  forecast: WeatherType;
  degrees: string;
  date: string;
};

export const WeatherPredictionCard = ({
  forecast,
  degrees,
  date,
}: WeatherPredictionCardProps) => (
  <HStack justifyContent="space-between">
    <HStack spacing={4}>
      <Icon as={getIcon(forecast)} w={10} h={10} color="orange.500" />

      <VStack alignItems="start">
        <Text size="smsb">{forecast[0].toUpperCase() + forecast.slice(1)}</Text>

        <Text size="xsb" opacity={0.5}>
          {date}
        </Text>
      </VStack>
    </HStack>

    <Text size="mdsb" color="orange.500">
      {degrees}
    </Text>
  </HStack>
);
