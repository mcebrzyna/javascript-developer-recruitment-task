import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/interceptors';

@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    providers: [httpInterceptorProviders],
})
export class AppCoreModule {}
