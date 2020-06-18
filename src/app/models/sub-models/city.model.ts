import { Coordinates } from './coordinates.model';

export class City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
}
