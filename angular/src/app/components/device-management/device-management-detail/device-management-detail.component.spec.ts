import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagementDetailComponent } from './device-management-detail.component';

describe('DeviceManagementDetailComponent', () => {
  let component: DeviceManagementDetailComponent;
  let fixture: ComponentFixture<DeviceManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceManagementDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
