import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherPageComponent } from './city-weather-page.component';

describe('CityWeatherPageComponent', () => {
    let component: CityWeatherPageComponent;
    let fixture: ComponentFixture<CityWeatherPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CityWeatherPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CityWeatherPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
