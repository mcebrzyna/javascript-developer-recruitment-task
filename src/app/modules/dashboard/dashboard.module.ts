import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { MaterialModule } from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CityCardEmptyComponent } from './components/city-card-empty/city-card-empty.component';

@NgModule({
    declarations: [
        DashboardPageComponent,
        CityCardComponent,
        CityCardEmptyComponent,
    ],
    imports: [CommonModule, MaterialModule, DashboardRoutingModule],
})
export class DashboardModule {}
