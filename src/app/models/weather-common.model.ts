import { Weather } from './sub-models/weather.model';
import { MainWeatherMetrics } from './sub-models/main.model';
import { WindMetrics } from './sub-models/wind.model';
import { CloudsMetrics } from './sub-models/clouds.model';

export class WeatherCommon {
  dt: number;
  main: MainWeatherMetrics;
  weather: Weather;
  clouds: CloudsMetrics;
  wind: WindMetrics;
}
