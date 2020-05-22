import { Component, Input } from '@angular/core';
import { ExactWeather } from '../../../../core/models/exact-weather';
import { SimpleWeather } from '../../../../core/models/simple-weather';
import { FavoriteService } from '../../../../core/services/favorite.service';

@Component({
    selector: 'app-today-weather',
    templateUrl: './today-weather.component.html',
    styleUrls: ['./today-weather.component.scss'],
})
export class TodayWeatherComponent {
    @Input() public weather: ExactWeather;

    get imgUrl(): string {
        const iconPath = this.weather.list[0].weather[0].icon;

        return `http://openweathermap.org/img/wn/${iconPath}@2x.png`;
    }

    get today(): SimpleWeather {
        return this.weather.list[0];
    }

    get additives(): Map<string, string> {
        const map = new Map();

        map.set('Humidity', `${this.today.main.humidity}%`);
        map.set('Pressure', `${this.today.main.pressure} hPa`);
        map.set('Clouds', `${this.today.clouds.all}%`);

        return map;
    }

    constructor(private favoriteService: FavoriteService) {}

    public addFavorite() {
        this.favoriteService.add(this.weather.city);
    }
}
