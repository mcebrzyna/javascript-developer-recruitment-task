import { Component, Input, OnInit } from '@angular/core';
import { ExactWeather } from '../../../../core/models/exact-weather';

@Component({
    selector: 'app-city-forecast',
    templateUrl: './city-forecast.component.html',
    styleUrls: ['./city-forecast.component.scss'],
})
export class CityForecastComponent implements OnInit {
    @Input() weather: ExactWeather;

    constructor() {}

    ngOnInit(): void {}
}
