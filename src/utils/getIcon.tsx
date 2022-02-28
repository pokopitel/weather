import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherSunny,
  TiWeatherWindyCloudy,
  TiWeatherWindy,
  TiWeatherPartlySunny,
} from "react-icons/ti";

import { WeatherType } from "../types";

export const getIcon = (type: WeatherType) => {
  switch (type) {
    case WeatherType.CLOUDY:
      return TiWeatherCloudy;

    case WeatherType.DOWNPOUR:
      return TiWeatherDownpour;

    case WeatherType.SHOWER:
      return TiWeatherShower;

    case WeatherType.SNOW:
      return TiWeatherSnow;

    case WeatherType.SUNNY:
      return TiWeatherSunny;

    case WeatherType.PARTLY_SUNNY:
      return TiWeatherPartlySunny;

    case WeatherType.WINDY:
      return TiWeatherWindy;

    case WeatherType.WINDY_CLOUDY:
      return TiWeatherWindyCloudy;
  }
};
