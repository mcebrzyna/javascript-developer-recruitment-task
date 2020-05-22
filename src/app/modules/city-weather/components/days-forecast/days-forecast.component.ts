import { Component, Input, OnInit } from '@angular/core';
import { ExactWeather } from '../../../../core/models/exact-weather';

@Component({
    selector: 'app-days-forecast',
    templateUrl: './days-forecast.component.html',
    styleUrls: ['./days-forecast.component.scss'],
})
export class DaysForecastComponent implements OnInit {
    @Input() weather: ExactWeather;

    constructor() {}

    ngOnInit(): void {}
}
