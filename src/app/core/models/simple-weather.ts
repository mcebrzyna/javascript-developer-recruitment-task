import { Weather } from './weather';
import { Temperature } from './temperature';
import { Wind } from './wind';
import { Clouds } from './clouds';

export interface SimpleWeather {
    dt: number;
    name: string;
    id: number;
    weather: Weather[];
    main: Temperature;
    wind: Wind;
    clouds: Clouds;
}
