import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        MainPageComponent,
        SearchBarComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [CommonModule, MaterialModule, FormsModule, RouterModule],
})
export class MainModule {}
