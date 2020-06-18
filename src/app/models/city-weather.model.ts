import { Sys } from './sub-models/sys.model';
import { Coordinates } from './sub-models/coordinates.model';
import { WeatherCommon } from './weather-common.model';

export class CityWeather extends WeatherCommon {
  id: number;
  name: string;
  visibility: number;
  timezone: number;
  sys: Sys;
  coord: Coordinates;
}
