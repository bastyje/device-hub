import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { Config } from '../../interfaces/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  private config = new BehaviorSubject<Config | null>(null);
  public readonly api$ = this.config.asObservable().pipe(
    filter(config => !!config)
  );

  private configUrl = 'assets/config.json';

  public loadConfig() {
    return this.http.get<Config>(`${this.configUrl}`).subscribe({
      next: config => this.config.next(config)
    });
  }
}