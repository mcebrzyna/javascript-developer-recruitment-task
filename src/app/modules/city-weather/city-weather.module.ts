import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';
import { CityWeatherRoutingModule } from './city-weather-routing.module';
import { TodayWeatherComponent } from './components/today-weather/today-weather.component';
import { DaysForecastComponent } from './components/days-forecast/days-forecast.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        CityWeatherPageComponent,
        TodayWeatherComponent,
        DaysForecastComponent,
        CityForecastComponent,
    ],
    imports: [CommonModule, CityWeatherRoutingModule, MaterialModule],
})
export class CityWeatherModule {}
