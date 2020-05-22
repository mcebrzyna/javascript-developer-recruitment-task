import { Component, OnInit } from '@angular/core';
import { ExactWeather } from '../../../../core/models/exact-weather';
import { Observable, of } from 'rxjs';
import { WeatherHttpService } from '../../../../core/services/weather-http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'app-city-weather-page',
    templateUrl: './city-weather-page.component.html',
    styleUrls: ['./city-weather-page.component.scss'],
})
export class CityWeatherPageComponent implements OnInit {
    public exactWeather$: Observable<ExactWeather | boolean>;
    public isLoaded = false;

    constructor(
        private weatherHttpService: WeatherHttpService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.exactWeather$ = this.route.params.pipe(
            tap(() => (this.isLoaded = false)),
            map((params: Params) => params.city),
            switchMap((city: string) =>
                this.weatherHttpService.getFullCityByName(city).pipe(
                    catchError(() => {
                        this.isLoaded = true;
                        return of(false);
                    })
                )
            ),
            finalize(() => (this.isLoaded = true))
        );
    }

    backToDashboard(): void {
        this.router.navigate(['/dashboard']);
    }
}
