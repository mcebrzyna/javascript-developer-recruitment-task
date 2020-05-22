import { Injectable } from '@angular/core';
import { HttpService } from '../api/http.service';
import { Observable } from 'rxjs';
import { AppCoreModule } from '../core.module';
import { ExactWeather } from '../models/exact-weather';

@Injectable({
    providedIn: AppCoreModule,
})
export class WeatherHttpService extends HttpService {
    public getFullCityByName(name: string): Observable<ExactWeather> {
        const params = { q: name };

        return this.request('forecast', params);
    }

    public getSeveralCitiesById(id: string): Observable<any> {
        return this.request('group', { id });
    }
}
