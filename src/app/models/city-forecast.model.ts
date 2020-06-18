import { City } from './sub-models/city.model';
import { Forecast } from './forcast.model';

export class CityForecast {
  city: City;
  list: Array<Forecast>;
}
