import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardEmptyComponent } from './city-card-empty.component';

describe('CityCardEmptyComponent', () => {
    let component: CityCardEmptyComponent;
    let fixture: ComponentFixture<CityCardEmptyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CityCardEmptyComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CityCardEmptyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
