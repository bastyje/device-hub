import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { MeasurementSettingsComponent } from './measurement-settings/measurement-settings.component';

import { Measurement } from 'src/app/models/measurement';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  constructor(private http: HttpService) { }

  measurements: Measurement[] = [] as Measurement[];

  ngOnInit(): void {
    //this.http.getA().subscribe(response => console.log(response));
    this.http.get<any>('Measurement/GetAll').subscribe(response => {
      this.measurements = response.measurements;
    });
   }
}
