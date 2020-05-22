import { Injectable } from '@angular/core';
import { AppCoreModule } from '../core.module';
import { City } from '../models/city';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: AppCoreModule,
})
export class FavoriteService {
    private favorites = new BehaviorSubject<City[]>([]);

    constructor() {
        this.init();
    }

    private tabValue(): City[] {
        return this.favorites.getValue();
    }

    private update(tab: City[]): void {
        this.favorites.next(tab);

        localStorage.setItem(
            'weatherApp.favorites',
            JSON.stringify(this.tabValue())
        );
    }

    private init(): void {
        const rawData = localStorage.getItem('weatherApp.favorites');

        if (!rawData) {
            this.update([]);
            return;
        }

        this.favorites.next(JSON.parse(rawData));
    }

    public add(city: City): void {
        console.log(this.tabValue());

        const isUnique =
            this.tabValue().filter((el) => el.id === city.id).length === 0;

        if (!isUnique) {
            return;
        }

        const tempTab = this.tabValue();

        tempTab.push(city);
        this.update(tempTab);
    }

    public remove(id: number): void {
        const tempTab = this.tabValue().filter((city) => city.id !== id);

        this.update(tempTab);
    }

    public favorites$(): Observable<City[]> {
        return this.favorites.asObservable();
    }
}
