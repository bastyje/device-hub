import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit {

  constructor() { }

  devices = [
    {
      name: 'nucleo62'
    },
    {
      name: 'disc-f429i'
    }
  ]

  ngOnInit(): void {
  }

}
