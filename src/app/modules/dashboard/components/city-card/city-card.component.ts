import { Component, Input, OnInit } from '@angular/core';
import { SimpleWeather } from '../../../../core/models/simple-weather';
import { Router } from '@angular/router';
import { FavoriteService } from '../../../../core/services/favorite.service';

@Component({
    selector: 'app-city-card',
    templateUrl: './city-card.component.html',
    styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
    @Input() card: SimpleWeather;

    get imgUrl(): string {
        const iconPath = this.card.weather[0].icon;

        return `http://openweathermap.org/img/wn/${iconPath}@2x.png`;
    }

    constructor(
        private router: Router,
        private favoriteService: FavoriteService
    ) {}

    ngOnInit(): void {}

    public openForecast() {
        this.router.navigate(['/city-forecast', this.card.name]);
    }

    public removeCard(event: Event): void {
        event.stopPropagation();
        this.favoriteService.remove(this.card.id);
    }
}
