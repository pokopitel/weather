import {
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Slider as SliderChakra,
} from "@chakra-ui/react";

export const Slider = () => (
  <SliderChakra defaultValue={0} min={0} max={12} step={1} my={1}>
    <SliderTrack bg="red.100">
      <SliderFilledTrack bg="orange.300" />
    </SliderTrack>
    <SliderThumb boxSize={3} bg="orange.500" />
  </SliderChakra>
);
