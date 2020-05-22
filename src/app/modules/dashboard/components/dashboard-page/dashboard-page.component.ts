import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FavoriteService } from '../../../../core/services/favorite.service';
import { map, switchMap } from 'rxjs/operators';
import { WeatherHttpService } from '../../../../core/services/weather-http.service';
import { ExactWeather } from '../../../../core/models/exact-weather';
import { SimpleWeather } from '../../../../core/models/simple-weather';
import { City } from '../../../../core/models/city';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
    public favorites$: Observable<SimpleWeather[]>;

    constructor(
        private favoriteService: FavoriteService,
        private weatherHttpsService: WeatherHttpService
    ) {}

    ngOnInit(): void {
        this.favorites$ = this.favoriteService.favorites$().pipe(
            map((data) => data.map((city: City) => city.id).join(',')),
            switchMap((id: string) => {
                if (id.length > 0) {
                    return this.weatherHttpsService.getSeveralCitiesById(id);
                } else {
                    return of([]);
                }
            }),
            map((res: ExactWeather) => res.list)
        );
    }
}
