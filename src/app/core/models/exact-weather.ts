import { SimpleWeather } from './simple-weather';
import { City } from './city';

export interface ExactWeather {
    list: SimpleWeather[];
    city: City;
}
