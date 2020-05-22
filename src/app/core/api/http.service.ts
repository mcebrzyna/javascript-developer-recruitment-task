import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppCoreModule } from '../core.module';

@Injectable({
    providedIn: AppCoreModule,
})
export abstract class HttpService {
    protected constructor(protected http: HttpClient) {}

    public request(
        endpoint: string,
        params: { [key: string]: string } = {}
    ): Observable<any> {
        const url = `/data/2.5/${endpoint}`;
        const appId = '1e45b4790723cd2011bdbdb791980393';
        const units = 'metric';

        params = {
            ...params,
            units,
            appid: appId,
        };

        return this.http.get(url, { params });
    }
}
