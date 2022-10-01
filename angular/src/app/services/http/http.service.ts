import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Measurement } from '../../models/measurement';
import { Observable } from 'rxjs';
import { Config } from 'src/app/interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private config: ConfigService) { 
    config.api$.subscribe(api => this.endpoint = `${api?.backendUrl}`);
  }

  private endpoint: string | undefined;

  get<T>(url: string, httpHeaders?: HttpHeaders, httpParams?: HttpParams): Observable<T> {
    const options = { headers: httpHeaders, params: httpParams };
    url = this.endpoint + url;
    return this.http.get<T>(url, options);
  }
}
