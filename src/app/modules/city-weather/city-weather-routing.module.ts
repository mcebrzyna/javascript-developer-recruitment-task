import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CityWeatherPageComponent } from './components/city-weather-page/city-weather-page.component';

const routes: Routes = [
    {
        path: '',
        component: CityWeatherPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CityWeatherRoutingModule {}
